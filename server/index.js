const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const parser = require("body-parser");
const Fuse = require("fuse.js");

require("dotenv").config();

// Airtable data
const AIRTABLEAPI = process.env.airtableapikey;
const AIRTABLEBASEID = process.env.airtablebaseid;
const AIRTABLETABLENAME = "questions";

const app = express();
const port = process.env.PORT || 8080;

// Configure CORS middleware
app.use(cors());

// Parse JSON request body
app.use(parser.json());

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

// Get all questions
app.get("/questions", (req, res) => {
  fetch(
    `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}?pageSize=10`,
    {
      headers: { Authorization: `Bearer ${AIRTABLEAPI}` },
    }
  )
    .then((res) => res.json())
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err.response);
    });
});

// Post a new question
app.post("/create", (req, res) => {
  let datain = req.body.questionData;

  let payload = {
    records: [
      {
        fields: {
          _recordId: datain["_recordId"],
          "Company Name": datain["Company Name"],
          Question: datain["Question"],
          Answer: datain["Answer"],
          _companyId: datain["_companyId"],
          "Created At": datain["Created At"],
          "Updated At": datain["Updated At"],
          "Updated By": datain["Updated By"],
          "Created By": datain["Created By"],
        },
      },
    ],
  };

  fetch(`https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${AIRTABLEAPI}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log("error");
    });
});

// Update a question
app.post("/update", (req, res) => {
  console.log("de aici vine: ", req.body);

  var datain = req.body;

  var payload = {
    records: [
      {
        id: "rec1wLijTDe5NuDmU",
        fields: {
          Question: datain["Question"],
        },
      },
    ],
  };

  fetch(`https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}`, {
    method: "patch",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${AIRTABLEAPI}`, // API key
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete a question
app.post("/delete", (req, res) => {
  console.log(req.body.id);
  fetch(
    `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}/${req.body.id}`,
    {
      method: "delete",
      headers: {
        Authorization: `Bearer ${AIRTABLEAPI}`,
      },
    }
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Listen port console
app.listen(port, () => {
  console.log("server listening on port 8080");
});

// Fuzzy search implementation
app.post("/fuzzyQuestions", (req, res) => {
  fetch(
    `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}?pageSize=100`,
    {
      headers: { Authorization: `Bearer ${AIRTABLEAPI}` },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      // Extract question and answer columns from Airtable data
      const questions = result.records.map((record) => ({
        question: record.fields["Question"],
        answer: record.fields["Answer"],
      }));

      // Perform fuzzy search
      const options = {
        keys: ["question", "answer"],
        threshold: 0.4,
      };

      const fuse = new Fuse(questions, options);
      const fuzzyQuery = req.body.questionData;

      // Perform fuzzy search
      const searchResults = fuse.search(fuzzyQuery);

      res.json(searchResults);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

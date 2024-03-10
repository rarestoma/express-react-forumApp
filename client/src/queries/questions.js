import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AppConfig from "../config";
import { useState } from "react";

// Get all questions
export function useQuestions() {
  return useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const response = await fetch(`${AppConfig.serverUrl}/questions`);
      return response.json();
    },
  });
}

// Create a question
export function useCreateQuestion() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const createQuestion = async (questionData) => {
    setIsLoading(true);
    console.log(questionData);
    try {
      const response = await fetch(`${AppConfig.serverUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionData }),
      });
      if (!response.ok) {
        throw new Error("Failed to create question");
      }
      // Invalidate the 'questions' query after the deletion
      queryClient.invalidateQueries("questions");
      setIsLoading(false);
      return response.json();
    } catch (error) {
      throw new Error("Failed to create question:", error);
    }
  };

  return { createQuestion, isLoading };
}

// Update a question
export function useUpdateQuestion() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const updateQuestion = async (questionId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${AppConfig.serverUrl}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: questionId }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete question");
      }
      // Invalidate the 'questions' query after the change
      queryClient.invalidateQueries("questions");
      setIsLoading(false);
      return response.json();
    } catch (error) {
      throw new Error("Failed to delete question:", error);
    }
  };

  return { updateQuestion, isLoading };
}

// Delete a question
export function useDeleteQuestion() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const deleteQuestion = async (questionId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${AppConfig.serverUrl}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: questionId }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete question");
      }
      // Invalidate the 'questions' query after the deletion
      queryClient.invalidateQueries("questions");
      setIsLoading(false);
      return response.json();
    } catch (error) {
      throw new Error("Failed to delete question:", error);
    }
  };

  return { deleteQuestion, isLoading };
}

// Fuzzy search for questions
export function useFuzzyQuestions(questionData) {
  return useQuery({
    queryKey: ["fuzzyQuestions"],
    queryFn: async () => {
      const response = await fetch(`${AppConfig.serverUrl}/fuzzyQuestions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionData }),
      });
      return response.json();
    },
  });
}

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

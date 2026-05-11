"use client";

import { createContext, useContext, useState } from "react";

const SearchDialogContext = createContext();

export function SearchDialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const openDialog = (initialQuery = "") => {
    setQuery(initialQuery);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <SearchDialogContext.Provider value={{ isOpen, query, setQuery, openDialog, closeDialog }}>
      {children}
    </SearchDialogContext.Provider>
  );
}

export function useSearchDialog() {
  const context = useContext(SearchDialogContext);
  if (!context) {
    throw new Error("useSearchDialog must be used within a SearchDialogProvider");
  }
  return context;
}

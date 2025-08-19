import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const RichTextEditor = ({
  value = "",
  onChange,
  placeholder = "Enter description...",
  height = 200,
  preview = "edit",
  className = "",
  required = false,
}) => {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const handleChange = (val) => {
    setEditorValue(val || "");
    if (onChange) {
      onChange(val || "");
    }
  };

  const customCommands = [
    {
      name: "bold",
      keyCommand: "bold",
      buttonProps: { "aria-label": "Bold" },
      icon: <span style={{ fontWeight: "bold" }}>B</span>,
    },
    {
      name: "italic",
      keyCommand: "italic",
      buttonProps: { "aria-label": "Italic" },
      icon: <span style={{ fontStyle: "italic" }}>I</span>,
    },
    {
      name: "unorderedListCommand",
      keyCommand: "unorderedListCommand",
      buttonProps: { "aria-label": "Unordered List" },
      icon: <span>•</span>,
    },
    {
      name: "orderedListCommand",
      keyCommand: "orderedListCommand",
      buttonProps: { "aria-label": "Ordered List" },
      icon: <span>1.</span>,
    },
    {
      name: "link",
      keyCommand: "link",
      buttonProps: { "aria-label": "Link" },
      icon: <span>🔗</span>,
    },
  ];

  return (
    <div className={`rich-text-editor ${className}`}>
      <style jsx>{`
        .rich-text-editor .w-md-editor {
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .rich-text-editor .w-md-editor:focus-within {
          border-color: #e5b700;
          box-shadow: 0 0 0 2px rgba(229, 183, 0, 0.1);
        }

        .rich-text-editor .w-md-editor-text-area,
        .rich-text-editor .w-md-editor-text {
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #374151;
        }

        .rich-text-editor .w-md-editor-text-area::placeholder {
          color: #9ca3af;
        }

        .rich-text-editor .w-md-editor-toolbar {
          background-color: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          padding: 0.5rem;
        }

        .rich-text-editor .w-md-editor-toolbar-child > button {
          color: #6b7280;
          border: none;
          background-color: transparent;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          margin: 0 0.125rem;
        }

        .rich-text-editor .w-md-editor-toolbar-child > button:hover {
          background-color: #e5e7eb;
          color: #374151;
        }

        .rich-text-editor .w-md-editor-toolbar-child > button.active {
          background-color: #e5b700;
          color: white;
        }

        .rich-text-editor .wmde-markdown {
          background-color: white;
          padding: 0.75rem;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .rich-text-editor .wmde-markdown h1,
        .rich-text-editor .wmde-markdown h2,
        .rich-text-editor .wmde-markdown h3,
        .rich-text-editor .wmde-markdown h4,
        .rich-text-editor .wmde-markdown h5,
        .rich-text-editor .wmde-markdown h6 {
          color: #111827;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        .rich-text-editor .wmde-markdown p {
          margin-bottom: 0.75rem;
          color: #374151;
        }

        .rich-text-editor .wmde-markdown ul,
        .rich-text-editor .wmde-markdown ol {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
        }

        .rich-text-editor .wmde-markdown li {
          margin-bottom: 0.25rem;
          color: #374151;
        }

        .rich-text-editor .wmde-markdown strong {
          font-weight: 600;
          color: #111827;
        }

        .rich-text-editor .wmde-markdown em {
          font-style: italic;
        }

        .rich-text-editor .wmde-markdown a {
          color: #e5b700;
          text-decoration: underline;
        }

        .rich-text-editor .wmde-markdown a:hover {
          color: #d97706;
        }

        .rich-text-editor .wmde-markdown code {
          background-color: #f3f4f6;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.8125rem;
          color: #374151;
        }

        .rich-text-editor .wmde-markdown pre {
          background-color: #f3f4f6;
          padding: 0.75rem;
          border-radius: 0.375rem;
          margin-bottom: 0.75rem;
          overflow-x: auto;
        }

        .rich-text-editor .wmde-markdown blockquote {
          border-left: 4px solid #e5b700;
          padding-left: 1rem;
          margin: 0.75rem 0;
          color: #6b7280;
          font-style: italic;
        }
      `}</style>

      <MDEditor
        value={editorValue}
        onChange={handleChange}
        preview={preview}
        height={height}
        data-color-mode="light"
        textareaProps={{
          placeholder: placeholder,
          required: required,
          style: {
            fontSize: "14px",
            lineHeight: "1.5",
            fontFamily: "inherit",
          },
        }}
        commands={customCommands}
        extraCommands={[]}
        visibleDragBar={false}
      />
    </div>
  );
};

export default RichTextEditor;

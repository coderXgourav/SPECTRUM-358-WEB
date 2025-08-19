import React from "react";
import DOMPurify from "dompurify";

const RichTextDisplay = ({
  content,
  maxLength = null,
  className = "",
  showFullContent = false,
}) => {
  if (!content) return null;

  // Sanitize the content for safe rendering
  const sanitizeContent = (htmlContent) => {
    return DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "code",
        "pre",
        "a",
        "hr",
      ],
      ALLOWED_ATTR: ["href", "title", "class"],
      ALLOW_DATA_ATTR: false,
    });
  };

  // If maxLength is specified and we're not showing full content, truncate
  let displayContent = content;
  let isTruncated = false;

  if (maxLength && !showFullContent) {
    // Remove HTML tags for length calculation
    const textContent = content.replace(/<[^>]*>/g, "");
    if (textContent.length > maxLength) {
      // Truncate the plain text and add ellipsis
      const truncatedText = textContent.substring(0, maxLength) + "...";
      displayContent = truncatedText;
      isTruncated = true;
    }
  }

  // If content contains HTML tags, render as HTML
  const hasHtmlTags = /<[^>]*>/g.test(content);

  if (hasHtmlTags && !isTruncated) {
    return (
      <div
        className={`rich-text-display ${className}`}
        dangerouslySetInnerHTML={{
          __html: sanitizeContent(displayContent),
        }}
        style={{
          wordBreak: "break-word",
          lineHeight: "1.5",
        }}
      />
    );
  }

  // For plain text or truncated content
  return (
    <div
      className={`rich-text-display ${className}`}
      style={{
        wordBreak: "break-word",
        lineHeight: "1.5",
      }}
    >
      {displayContent}
    </div>
  );
};

export default RichTextDisplay;

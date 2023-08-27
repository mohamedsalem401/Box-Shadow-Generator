import React, { useState, useEffect, useRef } from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { CopyButton } from "./CopyButton";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface CodeOutput {
  code: string;
  language: string;
  fileName: string;
}

const CodeOutput = ({ code, language, fileName = "" }: CodeOutput) => {
  const [formattedCode, setFormattedCode] = useState(code);
  const [expanded, setExpanded] = useState(true);

  const formatCode = () => {
    function format(node: HTMLDivElement, level: number) {
      const indentBefore = new Array(level++ + 1).join("  ");
      const indentAfter = new Array(level - 1).join("  ");
      let textNode;

      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode(`\n${indentBefore}`);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i] as HTMLDivElement, level);

        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode(`\n${indentAfter}`);
          node.appendChild(textNode);
        }
      }

      return node;
    }

    const div = document.createElement("div");
    div.innerHTML = code.trim();
    const formattedStr = format(div, 0).innerHTML;

    setFormattedCode(formattedStr.replace(/^\s+|\s+$/g, ""));
  };

  useEffect(() => {
    formatCode();
    hljs.configure({ languages: [language] });
    hljs.highlightAll();
  }, [formattedCode, code]);

  return (
    <div>
      <style>
        {`
    .button-container {
      position: relative;
    }

    .button-container button {
      padding-left: 10px; /* add padding to the left of the button to make room for the icon */
    }

    .button-container button .icon {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 30px; /* set the width of the icon */
      display: none; /* hide the icon by default */
    }

    .button-container button .text {
      display: inline-block;
      vertical-align: middle;
    }

    @media (max-width: 50px) {
      .button-container button .icon {
        display: inline-block; /* show the icon if the container width is smaller than 50px */
      }

      .button-container button .text {
        display: none; /* hide the text if the container width is smaller than 50px */
      }
    }
    
    /* Customize the track */
    pre::-webkit-scrollbar {
      background-color: #000;
      width: 6px;
    }

    pre::-webkit-scrollbar-track {
      background-color: #000;
    }

    /* Customize the thumb */
    pre::-webkit-scrollbar-thumb {
      background-color: #444;
      border-radius: 6px;
    }
    `}
      </style>
      <Box>
        <Stack
          sx={{
            display: "flex",
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#444",
            padding: "0 8px",
            borderRadius: expanded ? "8px 8px 0 0" : "8px",
            transition: "border-radius .3s ease",
          }}
        >
          <Typography
            sx={{ color: "#eee", fontSize: "14px", paddingLeft: "8px" }}
          >
            {language.toUpperCase()}
          </Typography>
          <Container
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "flex-end",
              fontSize: ".2em !important",
              alignItems: "center",
              maxWidth: "60%",
              margin: "0",
            }}
          >
            <CopyButton data={formattedCode} />
            <IconButton
              onClick={() => setExpanded((prev) => !prev)}
              style={{ color: "white", fill: "white" }}
            >
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Container>
        </Stack>
      </Box>
      <Box
        sx={{
          bgcolor: "#282c34",
          borderRadius: "0 0 8px 8px",
          overflow: "hidden",
          padding: "0",
        }}
      >
        <pre
          className={`hljs language-${language}`}
          style={{
            textAlign: "start",
            maxWidth: "100%",
            borderRadius: "8px",
            overflow: "auto",
            maxHeight: expanded ? "300px" : "0",
            transition: "height .3s ease",
            padding: expanded ? "8px" : "0",
            margin: 0,
          }}
        >
          <code>{formattedCode}</code>
        </pre>
      </Box>
    </div>
  );
};

export default CodeOutput;

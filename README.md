# VectorIDE

> **An AI-native development environment for building, running, and iterating on software with agentic AI.**

VectorIDE combines the flexibility of a browser-based IDE with the power of AI-driven software development.

Instead of switching between an AI chatbot, code editor, terminal, and development environment, VectorIDE brings the workflow together in one place — **describe what you want to build, let AI reason about the task, generate and modify code, run it, inspect the result, and continue iterating.**

---

## Why VectorIDE?

Modern AI coding tools are great at generating snippets and editing files, but building an application is much more than writing code.

A real project requires:

**planning → implementation → execution → debugging → iteration**

VectorIDE is designed around that complete development loop.

It combines:

* 🧠 **Agentic AI** for software development workflows
* 🤖 **Multi-agent orchestration** using LangGraph
* 🖥️ **Browser-based IDE** with Monaco Editor
* ⚡ **Live development environment** with an integrated terminal
* 🔄 **Real-time communication** between the frontend and backend
* 📁 **Project-based development** instead of isolated code generations
* ✨ **AI-assisted iteration** from idea to working software

---

## What makes VectorIDE different?

### From Prompt to Project

Describe the application or feature you want to build instead of manually starting from an empty editor.

VectorIDE uses an agentic workflow to reason about the task and work with the project as a whole.

```text
Idea
  ↓
AI Reasoning
  ↓
Task Planning
  ↓
Code Generation / Modification
  ↓
Run & Inspect
  ↓
Debug / Iterate
  ↓
Working Application
```

### Multi-Agent Development

VectorIDE is built around **agentic workflows rather than a single AI prompt-response loop**.

LangGraph is used to orchestrate the workflow as a stateful graph, allowing different stages of software development to be coordinated within a single execution flow.

This makes the system extensible toward specialized development roles such as:

* Planning
* Coding
* Debugging
* Testing
* Reviewing

The goal is to make AI behave less like an autocomplete tool and more like a **development team working inside the IDE**.

---

## Core Experience

### 🧑‍💻 Code Editor

Powered by **Monaco Editor**, the same editor technology that powers VS Code, VectorIDE provides a familiar coding experience directly in the browser.

### ⌨️ Integrated Terminal

An interactive terminal powered by **xterm.js** allows developers to execute commands and interact with their development environment without leaving the IDE.

### 🤖 Agentic AI

AI is integrated into the development workflow rather than being treated as a separate chat window.

The system can reason over tasks, modify the project, and continue through multiple stages of development.

### ⚡ Real-Time Architecture

VectorIDE uses **Socket.IO** for real-time communication between the client and backend, enabling interactive development workflows and live system feedback.

### 🔐 Authentication

User authentication and account management are handled using **Firebase Authentication**.

### 🧠 Stateful Agent Workflows

The backend is designed around **LangGraph-based orchestration**, making it possible to represent development tasks as connected agent/workflow states rather than isolated API calls.

---

## Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         │  Prompt / Actions   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     VectorIDE       │
                         │   React Frontend    │
                         └──────────┬──────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
                     ▼                             ▼
              ┌─────────────┐              ┌──────────────┐
              │ Monaco IDE  │              │   Terminal   │
              │ Code Editor │              │    xterm     │
              └─────────────┘              └──────────────┘
                     │
                     │ API / WebSocket
                     ▼
            ┌─────────────────────────┐
            │        Backend         │
            │ Agentic Orchestration  │
            └────────────┬────────────┘
                         │
                         ▼
                ┌──────────────────┐
                │     LangGraph    │
                │ Workflow / State │
                └────────┬─────────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
          Planner      Coder      Reviewer
              │          │          │
              └──────────┼──────────┘
                         ▼
                 Project Workspace
                         │
                         ▼
                   Run / Debug
                         │
                         └──────► Iterate
```

---

## Tech Stack

### Frontend

* **React 19**
* **Vite**
* **Monaco Editor**
* **xterm.js**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **Motion**
* **Firebase**
* **Socket.IO Client**
* **Axios**

### AI / Backend

* **LangGraph** — agentic workflow orchestration
* **Node.js ecosystem**
* **Redis / ioredis**
* **Socket.IO**
* REST APIs / real-time communication

LangGraph is specifically designed for building stateful, controllable agent workflows and supports long-running agent execution, orchestration, and human-in-the-loop patterns.

---

## Project Structure

```text
Vector-IDE/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── ...
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have:

* Node.js
* npm
* A configured Firebase project
* Required AI/API credentials
* Redis for backend services

### Clone the repository

```bash
git clone https://github.com/dikshaforsure/Vector-IDE.git
cd Vector-IDE
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start through Vite.

### Backend

```bash
cd backend
npm install
```

Configure the required environment variables before starting the backend.

> **Note:** Keep API keys, Firebase credentials, and other secrets in environment variables. Never commit them to Git.

---

## Development Workflow

A typical VectorIDE workflow looks like this:

```text
1. Create a project
       ↓
2. Describe the desired application or feature
       ↓
3. AI analyzes the request
       ↓
4. Agent workflow plans the implementation
       ↓
5. Agents modify project files
       ↓
6. Application is executed
       ↓
7. Errors / output are inspected
       ↓
8. AI iterates on the implementation
       ↓
9. Developer reviews and continues building
```

The objective is simple:

> **Reduce the distance between an idea and working software.**

---

## Current Focus

VectorIDE is being developed as an exploration of **agentic software engineering inside an interactive IDE**.

The project focuses on combining:

**AI agents + workflow orchestration + code editing + execution + iteration**

rather than treating AI as a standalone coding assistant.

---

## Roadmap

### AI Development Workflow

* [ ] Stronger multi-agent task orchestration
* [ ] Specialized coding / debugging / testing agents
* [ ] Context-aware project understanding
* [ ] Automatic error diagnosis and recovery
* [ ] Long-running development tasks
* [ ] Improved agent memory and state persistence

### IDE

* [ ] File explorer improvements
* [ ] Multi-file AI modifications
* [ ] Better terminal integration
* [ ] Git integration
* [ ] Code diff / change review
* [ ] Project templates

### Platform

* [ ] Persistent workspaces
* [ ] One-click project deployment
* [ ] Collaborative development
* [ ] Improved project isolation
* [ ] Production-ready infrastructure

---

## Vision

VectorIDE is built around a simple idea:

> **What if your development environment didn't just help you write code — what if it could actively build the software with you?**

The long-term goal is to create an environment where developers can move naturally between:

**thinking → prompting → coding → running → debugging → shipping**

without breaking the flow.

---

## Built With

Built with modern web technologies and agentic AI orchestration.

**Frontend:** React · Vite · Monaco · xterm · Redux · Tailwind
**Backend:** Node.js · Redis · Socket.IO
**AI:** LangGraph · LLM-powered agent workflows
**Auth:** Firebase

---

## Author

**Diksha Anand**

Computer Engineering Undergraduate
GitHub: [@dikshaforsure](https://github.com/dikshaforsure)

---

## ⭐ Support

If you find the project interesting, consider starring the repository and following its development.

**VectorIDE — Build software, not just code.**

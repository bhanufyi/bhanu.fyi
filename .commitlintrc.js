/** @type {import('czg').UserConfig} */

const Configuration = {
  rules: {
    "subject-empty": [2, "never"],
    "subject-max-length": [2, "always", 100],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["chore", "feat", "fix"]],
  },
  prompt: {
    types: [
      {
        value: "chore",
        name: "chore: 🌱  Maintenance or config updates",
        emoji: "🌱",
      },
      {
        value: "feat",
        name: "feat:  🦄  A new feature working",
        emoji: "🦄",
      },
      { value: "fix", name: "fix:   🔧  A bug fix", emoji: "🔧" },
    ],
    useEmoji: true,
    skipQuestions: ["scope", "body", "breaking", "confirmCommit"],
    defaultScope: "___CUSTOM___:",
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
  },
};

export default Configuration;

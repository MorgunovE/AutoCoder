## AutoCoder

This action automates the process of generating code from GitHub issues using OpenAI's ChatGPT and subsequently creates a pull request with the generated code for review.

### Inputs

- `github_token`: Personal access token (PAT) used for GitHub API authentication. This token is required to create pull requests and handle other repository interactions.
- `repository`: The repository where the action will be executed.
- `issue_number`: The number of the issue that triggered the action.
- `openai_api_key`: API key for OpenAI, enabling interactions with the ChatGPT service to generate code based on issue descriptions.
- `script_path`: The path to the script that interacts with ChatGPT and generates code.
- `label`: Allows users to customize the label that triggers the action. Default is `autocoder-bot`.

### Outputs

- `pull_request_url`: The URL of the pull request that has been automatically created, containing the auto-generated code for review and potential merging.

### Usage

To use this action, set up a `.github/workflows/main.yml` file in your repository like the example below:

```yaml
name: AutoCodeGen
on:
  issues:
    types: [labeled]

jobs:
  generate_code:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: AutoCoder Composite Action
        uses: your-username/autocoder-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          repository: ${{ github.repository }}
          issue_number: ${{ github.event.issue.number }}
          openai_api_key: ${{ secrets.OPENAI_API_KEY }}
          script_path: ./scripts/script.sh
          label: autocoder-bot

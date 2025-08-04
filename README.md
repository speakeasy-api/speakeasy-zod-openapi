<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
  <img width="1500" height="500" alt="Speakeasy" src="https://github.com/user-attachments/assets/0e56055b-02a3-4476-9130-4be299e5a39c" />
 </a>
 <br />
 <br />
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs Quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://go.speakeasy.com/slack" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />

</div>

<hr />

<h2>Speakeasy Zod OpenAPI Example</h2>


This example Zod schema demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications optimised for creating production ready client libraries. For the associated tutorial please see our [docsite](https://speakeasyapi.dev/docs/api-frameworks/zod/).

## Requirements

-  Node v20.4.0
-  Speakeasy CLI

## Install Node modules

To install and run this example, you'll need to clone the repository and install the required node modules:

1.  Clone this repo:
    ```bash
    git clone git@github.com:ritza-co/speakeasy-zod-openapi.git
    ```
2.  Install Node modules. Run the following in the terminal:
    ```bash
    npm install
    ```

## Install Speakeasy CLI

To save OpenAPI output to a file and regenerate the SDK with Speakeasy, first install Speakeasy by following the [Speakeasy Getting Started](https://speakeasyapi.dev/docs/product-reference/speakeasy-cli/getting-started/) guide.

On macOS, you can install Speakeasy using Homebrew.

In your terminal, run:

```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Regenerate the `openapi.yaml` and the client SDK

In the project's directory, run:

```bash
npm run gen-openapi && npm run gen-sdk
```

<div align="center">

<a href="[Speakeasy](https://speakeasyapi.dev/)">
  <img src="https://github.com/speakeasy-api/speakeasy/assets/68016351/e959f81a-b250-4003-8c5c-a45b9463fc95" alt="Speakeasy Logo" width="400">
<h2>Speakeasy Zod OpenAPI Example</h2>
</a>

</div>

This example Zod schema demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications. For the associated tutorial please see our [docsite](https://speakeasyapi.dev/docs/api-frameworks/zod/).

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

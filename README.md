<p align="center">
    <a href="https://speakeasyapi.dev">
        <img alt="Speakeasy" title="Speakeasy" src="https://user-images.githubusercontent.com/68016351/196461357-fcb8d90f-cd67-498e-850f-6146c58d0114.png" width="400" style="color: black">
    </a>
</p>

<p align="center">
    <i>Speakeasy is the fastest way to ship developer experience for your APIs.</i><br/> 
    <a href="https://speakeasyapi.dev/">speakeasyapi.dev</a>
</p>

<h1>
    Speakeasy Zod OpenAPI Example
</h1>

</div>

This example Zod schema demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications.

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
>>>>>>> f1d5851 (initial commit)

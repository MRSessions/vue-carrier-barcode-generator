# Vue Carrier Barcode Generator (For Testing Only)

<details>
    <summary>Local Development</summary>

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

</details>

## Running Docker Locally

`docker run -d -p 8080:8080 --name vue-carrier-barcode-generator ghcr.io/mrsessions/vue-carrier-barcode-generator:latest`

## Additional Information/Resources

- In this app, I am using Code 128 Barcodes
    - For USPS you would want a GS1-128, but did not find a way to create that here (in the time I had)
    - I was able to take a small portion of USPS code to use it in Code 128 to come through as USPS carrier
    - This could be app specific, but works for my needs
    
- A good resource I found: https://products.aspose.app/barcode/generate
    - Code 128 for FedEx and UPS
    - GS1-128 for USPS
    - Lots of other Barcode types on there as well
    
- Another resource: [JsBarcode](https://github.com/lindell/JsBarcode)
- I used [vue-barcode](https://github.com/fengyuanchen/vue-barcode) which is based off JsBarcode

- I created this app to throw out random carrier barcodes to use with a scanner
    - I am only interested that it registers a proper carrier in a specific app I develop
    - Will want to test with real barcodes for proper barcode testing
    
- I plan on adding an Invalid barcodes section for additional testing purposes

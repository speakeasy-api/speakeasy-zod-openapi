# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+<UNSET>.git
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```python
import sdk
from sdk.models import shared

s = sdk.SDK()

req = shared.BurgerCreate(
    description='A delicious bean burger with avocado.',
    name='Veggie Burger',
)

res = s.burgers.create_burger(req)

if res.burger is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [burgers](docs/sdks/burgers/README.md)

* [create_burger](docs/sdks/burgers/README.md#create_burger) - Create a new burger
* [delete_burger](docs/sdks/burgers/README.md#delete_burger) - Delete a burger
* [get_burger](docs/sdks/burgers/README.md#get_burger) - Get a burger
* [list_burgers](docs/sdks/burgers/README.md#list_burgers) - List burgers
* [update_burger](docs/sdks/burgers/README.md#update_burger) - Update a burger

### [orders](docs/sdks/orders/README.md)

* [create_order](docs/sdks/orders/README.md#create_order) - Create a new order
* [delete_order](docs/sdks/orders/README.md#delete_order) - Delete an order
* [get_order](docs/sdks/orders/README.md#get_order) - Get an order
* [list_orders](docs/sdks/orders/README.md#list_orders) - List orders
* [update_order](docs/sdks/orders/README.md#update_order) - Update an order
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

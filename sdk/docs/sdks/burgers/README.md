# burgers

## Overview

Operations for managing burgers.

### Available Operations

* [create_burger](#create_burger) - Create a new burger
* [delete_burger](#delete_burger) - Delete a burger
* [get_burger](#get_burger) - Get a burger
* [list_burgers](#list_burgers) - List burgers
* [update_burger](#update_burger) - Update a burger

## create_burger

Creates a new burger in the database.

### Example Usage

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

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.BurgerCreate](../../models/shared/burgercreate.md)          | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |


### Response

**[operations.CreateBurgerResponse](../../models/operations/createburgerresponse.md)**


## delete_burger

Deletes a burger from the database.

### Example Usage

```python
import sdk
from sdk.models import operations

s = sdk.SDK()

req = operations.DeleteBurgerRequest(
    id=1,
)

res = s.burgers.delete_burger(req)

if res.status_code == 200:
    # handle response
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteBurgerRequest](../../models/operations/deleteburgerrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                 | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |


### Response

**[operations.DeleteBurgerResponse](../../models/operations/deleteburgerresponse.md)**


## get_burger

Gets a burger from the database.

### Example Usage

```python
import sdk
from sdk.models import operations

s = sdk.SDK()

req = operations.GetBurgerRequest(
    id=1,
)

res = s.burgers.get_burger(req)

if res.burger is not None:
    # handle response
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetBurgerRequest](../../models/operations/getburgerrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)           | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |


### Response

**[operations.GetBurgerResponse](../../models/operations/getburgerresponse.md)**


## list_burgers

Lists all burgers in the database.

### Example Usage

```python
import sdk


s = sdk.SDK()


res = s.burgers.list_burgers()

if res.burgers is not None:
    # handle response
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |


### Response

**[operations.ListBurgersResponse](../../models/operations/listburgersresponse.md)**


## update_burger

Updates a burger in the database.

### Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

req = operations.UpdateBurgerRequest(
    burger_update=shared.BurgerUpdate(
        description='A delicious bean burger with avocado.',
        name='Veggie Burger',
    ),
    id=1,
)

res = s.burgers.update_burger(req)

if res.burger is not None:
    # handle response
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateBurgerRequest](../../models/operations/updateburgerrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                 | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |


### Response

**[operations.UpdateBurgerResponse](../../models/operations/updateburgerresponse.md)**


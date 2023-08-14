# orders

## Overview

Operations for managing orders.

### Available Operations

* [create_order](#create_order) - Create a new order
* [delete_order](#delete_order) - Delete an order
* [get_order](#get_order) - Get an order
* [list_orders](#list_orders) - List orders
* [update_order](#update_order) - Update an order

## create_order

Creates a new order in the database.

### Example Usage

```python
import sdk
import dateutil.parser
from sdk.models import shared

s = sdk.SDK()

req = shared.OrderCreate(
    burger_ids=[
        1,
        1,
        1,
    ],
    note='No onions.',
    status=shared.OrderCreateStatus.PENDING,
    table=1,
    time=dateutil.parser.isoparse('2021-01-01T00:00:00.000Z'),
)

res = s.orders.create_order(req)

if res.create_order_201_application_json_object is not None:
    # handle response
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.OrderCreate](../../models/shared/ordercreate.md)            | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |


### Response

**[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)**


## delete_order

Deletes an order from the database.

### Example Usage

```python
import sdk
from sdk.models import operations

s = sdk.SDK()

req = operations.DeleteOrderRequest(
    id=1,
)

res = s.orders.delete_order(req)

if res.status_code == 200:
    # handle response
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)               | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |


### Response

**[operations.DeleteOrderResponse](../../models/operations/deleteorderresponse.md)**


## get_order

Gets an order from the database.

### Example Usage

```python
import sdk
from sdk.models import operations

s = sdk.SDK()

req = operations.GetOrderRequest(
    id=1,
)

res = s.orders.get_order(req)

if res.get_order_200_application_json_object is not None:
    # handle response
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetOrderRequest](../../models/operations/getorderrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)         | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |


### Response

**[operations.GetOrderResponse](../../models/operations/getorderresponse.md)**


## list_orders

Lists all orders in the database.

### Example Usage

```python
import sdk


s = sdk.SDK()


res = s.orders.list_orders()

if res.list_orders_200_application_json_objects is not None:
    # handle response
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |


### Response

**[operations.ListOrdersResponse](../../models/operations/listordersresponse.md)**


## update_order

Updates an order in the database.

### Example Usage

```python
import sdk
import dateutil.parser
from sdk.models import operations, shared

s = sdk.SDK()

req = operations.UpdateOrderRequest(
    order_update=shared.OrderUpdate(
        burger_ids=[
            1,
            1,
            1,
        ],
        note='No onions.',
        status=shared.OrderUpdateStatus.PENDING,
        table=1,
        time=dateutil.parser.isoparse('2021-01-01T00:00:00.000Z'),
    ),
    id=1,
)

res = s.orders.update_order(req)

if res.update_order_200_application_json_object is not None:
    # handle response
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdateOrderRequest](../../models/operations/updateorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)               | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |


### Response

**[operations.UpdateOrderResponse](../../models/operations/updateorderresponse.md)**


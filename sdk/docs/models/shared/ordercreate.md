# OrderCreate

An order to create.


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `burger_ids`                                                         | list[*float*]                                                        | :heavy_check_mark:                                                   | The burgers in the order.                                            |                                                                      |
| `note`                                                               | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | A note for the order.                                                | No onions.                                                           |
| `status`                                                             | [OrderCreateStatus](../../models/shared/ordercreatestatus.md)        | :heavy_check_mark:                                                   | The status of the order.                                             | pending                                                              |
| `table`                                                              | *float*                                                              | :heavy_check_mark:                                                   | The table the order is for.                                          | 1                                                                    |
| `time`                                                               | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | The time the order was placed.                                       | 2021-01-01T00:00:00.000Z                                             |
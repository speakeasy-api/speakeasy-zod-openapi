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
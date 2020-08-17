## Selector
#### a modern replacement for the old *jQuery* selector.

*syntax*:-

    $`index: selector`

*where*,

    (optional)index: (-ve or +ve)integer, the index of the target element from the list of elements returned by the selector.

    selector: any css selector

*Eg*:-

    $`0:div`

    $`body`

    $`#id`

    $`:root`

    $`-1:p.sentences`

now you can do:-

    $`body`.backgroundColor = 'beige';

    $`0: article p.first`.color = "#484848";

    

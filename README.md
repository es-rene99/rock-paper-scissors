# Rock Paper Scissors for the Odin Project

## Cool things I learned

- [Is preferred to use sanitize.css than normalize.css for browser compatibility](https://github.com/csstools/sanitize.css)
- [Website for further explanation of BEM methodology](https://en.bem.info/methodology/quick-start/)
  - Block?
    - Functionally independent component that can be reused, represented by the class attribute.
    - Describes a purpose, so it cannot be div, but it can be a semantic element like main
      - menu
      - button
      - error
      - header
      - logo
      - subject-form
    - They can be nested in each other
  
      ```html
      <!-- `header` block -->
      <header class="header">
          <!-- Nested `logo` block -->
          <div class="logo"></div>

          <!-- Nested `search-form` block -->
          <form class="search-form"></form>
      </header>
      ```

    - If the code section might be reused and it doesn't depend on the other page components being implemented.

  - Element
    - Composite part of a block that can't be used separately from it.
    - Describes the purpose
      - item
      - text
      - input
      - button
    - the structure is block-name__element-name
    - They always need to be inside of the block
    - If a section of a code can't be used separately without the parent entity(the block) then is an element.
  - Modifier
    - Describes a state or behavior of a block or element
      - color_red
      - size_b
      - theme_dark
      - size_s
      - left-top
    - The structure is block__modifier-name_value
    - Is separated by a single underscore
  - ID selectors for BEM should not be used, to ensure the necessary independence for blocks and reusing them from place to place.

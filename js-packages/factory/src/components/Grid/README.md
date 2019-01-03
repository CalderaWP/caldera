# Caldera Grid


## Grid Factory

## Grid Components

### Rows
Outputs many rows.

### Row
One row, possibly in a collection of rows. Outputs many columns.

```jsx
<Row
    key={'unique-key'}
    {...row}//The columns
    className={'custom-row-class'}
/>
```

## Column
One column, possibly inside of a row
    
```jsx
<Column
    key={'unique-key'}
    width={'1/3'}
    px={4}
    py={4}
>
   <p>Hi Roy</p>
</Column>
```

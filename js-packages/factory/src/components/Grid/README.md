# Caldera Grid

## Grid Factory

## Grid Components

### Rows
Outputs many rows. A row can be an object describing the row and its columns, or it can be a React component.

```js
const row = {
    rowId: 'r2',
    columns: [
        {
            fields: [{
            	//field config
            	//link to docs for this: @todo
            }],
          
            width: '1/3',
            columnId: 'c1'
        },
        <div 
            key={'unique-key'}
        >
            A Column can be a React component
        </div>,
    ]
    
}
```

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

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../features/OrderSlice'

const CheckboxGroup = () => {
  const dispatch = useDispatch()
  const selectedItems = useSelector((state) => state.order.items)
  const [groupState, setGroupState] = useState({
    indomie: false,
    'coca-cola': false,
    aqua: false,
  })

  useEffect(() =>{
    setGroupState({
        indomie:['Indomie, Soto', 'Indomie, Goreng Original'].some(item => selectedItems.includes(item)),
        'coca-cola':['Coca-Cola, 350ml', 'Coca-Cola, 1 Liter'].some(item => selectedItems.includes(item)),
        aqua:['Aqua, 350ml', 'Aqua, 1,5 Liter'].some(item => selectedItems.includes(item)),
    })
  },[selectedItems])

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(addItem(name));
    } else {
      dispatch(removeItem(name));
    }
  };

  const handleGroupChange = (group, items) => {
    const newGroupState = !groupState[group];
    setGroupState((prevState) => ({
      ...prevState,
      [group]: newGroupState,
    }))

    items.forEach((item) => {
      if (newGroupState && !selectedItems.includes(item)) {
        dispatch(addItem(item))
      } else if (!newGroupState && selectedItems.includes(item)) {
        dispatch(removeItem(item))
      }
    })
  }

  return (
    <div className='p-4 flex flex-col space-y-8'>
      
        <form >
          <label>
            <h2>
              <input
                type="checkbox"
                checked={groupState.indomie}
                onChange={() => handleGroupChange('indomie', ['Indomie, Soto', 'Indomie, Goreng Original'])}
              />
              Indomie
            </h2>
            <div className='pl-4 flex flex-col'>
            <label>
              <input 
                type="checkbox"
                name="Indomie, Soto"
                onChange={handleChange}
                checked={selectedItems.includes("Indomie, Soto")}
              />
              Soto
            </label>
            <label>
              <input
                type="checkbox"
                name="Indomie, Goreng Original"
                onChange={handleChange}
                checked={selectedItems.includes("Indomie, Goreng Original")}
              />
              Goreng Original
            </label>
            </div>
          </label>
        </form>

        <form  >
          <label>
            <h2>
              <input
                type="checkbox"
                checked={groupState['coca-cola']}
                onChange={() => handleGroupChange('coca-cola', ['Coca-Cola, 350ml', 'Coca-Cola, 1 Liter'])}
              />
              Coca-Cola
            </h2>
            <div className='pl-4 flex flex-col'>
            <label>
              <input
                type="checkbox"
                name="Coca-Cola, 350ml"
                onChange={handleChange}
                checked={selectedItems.includes("Coca-Cola, 350ml")}
              />
              350ml
            </label>
            <label>
              <input
                type="checkbox"
                name="Coca-Cola, 1 Liter"
                onChange={handleChange}
                checked={selectedItems.includes("Coca-Cola, 1 Liter")}
              />
              1 Liter
            </label>
            </div>
          </label>
        </form>

        <form >
          <label>
            <h2>
              <input
                type="checkbox"
                checked={groupState.aqua}
                onChange={() => handleGroupChange('aqua', ['Aqua, 350ml', 'Aqua, 1,5 Liter'])}
              />
              Aqua
            </h2>
            <div className='pl-4 flex flex-col'>
            <label>
              <input
                type="checkbox"
                name="Aqua, 350ml"
                onChange={handleChange}
                checked={selectedItems.includes("Aqua, 350ml")}
              />
              350ml
            </label>
            <label>
              <input
                type="checkbox"
                name="Aqua, 1,5 Liter"
                onChange={handleChange}
                checked={selectedItems.includes("Aqua, 1,5 Liter")}
              />
              1,5 Liter
            </label>
            </div>
          </label>
        </form>

      
    </div>
  );
};

export default CheckboxGroup;

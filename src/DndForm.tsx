import React, { useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd"
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi"
import { v4 as uuidv4 } from "uuid"
import WheelComponent from "./Wheel"

const DndForm = () => {
  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      text: "test A"
    },
    {
      id: uuidv4(),
      text: "test B"
    },
    {
      id: uuidv4(),
      text: "test C"
    },
    {
      id: uuidv4(),
      text: "test D"
    },
    {
      id: uuidv4(),
      text: "test E"
    },
    {
      id: uuidv4(),
      text: "test F"
    },
    {
      id: uuidv4(),
      text: "test G"
    },
    {
      id: uuidv4(),
      text: "test H"
    },
    {
      id: uuidv4(),
      text: "test I"
    },
    {
      id: uuidv4(),
      text: "test J"
    },
    {
      id: uuidv4(),
      text: "test K"
    }
  ])

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    const list = [...inputList]
    list[index]["text"] = value
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", id: uuidv4() }])
  }

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return

    const items = Array.from(inputList)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setInputList(items)
    return
  }

  return (
    <div style={{ display: "flex" }}>
      <WheelComponent data={inputList} />
      <div>
        <div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="items">
              {provided => (
                <ul
                  className="items"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ listStyle: "none" }}
                >
                  {inputList.map((x, index) => {
                    return (
                      <Draggable key={x.id} draggableId={x.id} index={index}>
                        {provided => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="list-item"
                          >
                            <div className="item">
                              <BiGridVertical />
                              <input
                                name="text"
                                placeholder="Введи что-нибудь(или нет)"
                                value={x.text}
                                onChange={e => handleInputChange(e, index)}
                                className="input"
                              />
                              <div className="btn-box">
                                {inputList.length !== 1 && (
                                  <button className="button" onClick={() => handleRemoveClick(index)}>
                                    <BiTrash />
                                  </button>
                                )}
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <button onClick={handleAddClick} style={{ marginLeft: "2.1rem" }} className="button">
            <BiPlus />
          </button>
        </div>
        <div>
          PROPAL
          <ul className="items" style={{ listStyle: "none" }}>
            {inputList.map((x, index) => (
              <li className="list-item">x</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DndForm

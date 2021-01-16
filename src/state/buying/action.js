export const getTodo = () => {
    return {
      type: 'ADD_ITEM',
      payload: [
        {
          id: Math.random(),
          name: 'Belajar',
          description: 'Belajar persiapan small project'
        },
        {
          id: Math.random(),
          name: 'Membaca',
          description: 'Membaca novel sebelum tidur'
        },
        {
          id: Math.random(),
          name: 'Meeting',
          description: 'Meeting dengan client jam 7 malam'
        }
      ]
    }
  }
  
  export const getTodoById = (id) => {                 
    return {
      type: 'NEXT_ITEM',
      payload: {
        id
      }
    }
  }
  
  export const addTodo = (todo) => {                       
    return {
      type: 'PREV_ITEM',
      payload: {
        ...todo,
        id: Math.random()
      }
    }
  }
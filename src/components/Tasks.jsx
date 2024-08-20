import React from 'react'

export default function Tasks({tasks}) {
  console.log(tasks)
  function deleteItem(e) {
    let item = e.target.closest('#taskId')
    item.remove()
}
// Mark as done
function markAsDone(e) {
  if (e.target.classList.contains('fa-circle-check')) {
      e.target.classList.remove('fa-circle-check')
      e.target.classList.add('fa-undo-alt')
  
      e.target.closest('#taskId').querySelector('.pOfTask').classList.add('done')
      e.target.closest('#taskId').classList.add('bg-success')

  }
 else{
  e.target.classList.add('fa-circle-check')
  e.target.classList.remove('fa-undo-alt')
  e.target.closest('#taskId').querySelector('.pOfTask').classList.remove('done')
  e.target.closest('#taskId').classList.remove('bg-success')

 }
}


  return (
    <div id="tasks" className="px-lg-4" >
      {tasks?.map((e,index)=>{
       return <div key={index} id='taskId' class="my-3 rounded py-2" style={{backgroundColor:'#cbd7e2'}}>
        <div class="d-flex align-items-center px-lg-4 w-100">
            <p class='pOfTask my-1'>{e}</p>
            <div class="ms-auto">
                <i class="fa-solid mx-2 fa-circle-check "  onClick={markAsDone}></i>
                <i class="fa-solid mx-2 fa-trash-can" onClick={deleteItem} ></i>
            </div>
        </div>
    </div>
      })}
    </div>
  )
}

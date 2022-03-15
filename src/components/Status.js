import React from 'react'

export const Status = ({filterStatus, setFilterStatus}) => {
    const handleClick = (status) => {
        setFilterStatus(status)
    }
    return (
        <div className='status'>
            <span className={`${filterStatus === "all" && "active"}`} onClick={() => handleClick("all")}>All</span>
            <span className={`${filterStatus === "active" && "active"}`} onClick={() => handleClick("active")}>Active</span>
            <span className={`${filterStatus ==="completed" && "active"}`} onClick={() => handleClick("completed")}>Completed</span>
        </div>
    )
}

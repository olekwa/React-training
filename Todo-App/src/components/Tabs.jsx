export function Tabs(props) {
  const {todos, selectedTab, setSelectedTab} = props;
  
  const tabs = ["All", "Active", "Completed"];

  return (
    <nav className="tab-container">
     {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === "All" ?
          todos.length :
          tab === "Active" ?
          todos.filter(val => !val.isCompleted).length :
          todos.filter(val => val.isCompleted).length;
      
      
      return (
        <button 
          onClick={() => setSelectedTab(tab)}
          key={tabIndex} 
          className={"tab-button" + (selectedTab === tab ? " tab-selected" : "") }>
          <h4>
            {tab} 
            <span> ({numOfTasks})
            </span>
          </h4>
        </button>
      )
     })}
     <hr />
    </nav>
  )
}
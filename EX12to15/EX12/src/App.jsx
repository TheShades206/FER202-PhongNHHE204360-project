import Counter from "./components/Counter";
import ToggleVisibility from "./components/ToggleVisibility";
import ControlledInput from "./components/ControlledInput";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import TodoList from "./components/TodoList";
import DragAndDropList from "./components/DragAndDropList";

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>React Exercises</h1>
      
      <section style={{ margin: '20px 0' }}>
        <h3>1. Counter</h3>
        <Counter />
      </section>
      {/* <hr /> */}

      <section style={{ margin: '20px 0' }}>
        <h3>2. Toggle Visibility</h3>
        <ToggleVisibility />
      </section>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h3>3. Controlled Input</h3>
        <ControlledInput />
      </section>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h3>4. Color Switcher</h3>
        <ColorSwitcher />
      </section>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h3>5. Search Filter</h3>
        <SearchFilter />
      </section>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h3>6. Todo List</h3>
        <TodoList />
      </section>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h3>7. Drag & Drop List</h3>
        <DragAndDropList />
      </section>
    </div>
  );
}

export default App;
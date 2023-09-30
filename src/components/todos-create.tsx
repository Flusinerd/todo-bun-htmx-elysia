export default function TodosCreate() {
  return (
    <form class="flex gap-4" hx-post="/todos" hx-target="#todos-list" hx-swap="afterbegin">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title-input">Title</label>
        <input id="title-input" type="text" maxlength="100" required="true" class="border-black border" name="title" />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description-input">Description</label>
        <textarea maxlength="512" required="true" class="border-black border" id="description-input" name="description"></textarea>
      </div>
      <button type="submit" class="mb-auto mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Todo</button>
    </form>
  )
}

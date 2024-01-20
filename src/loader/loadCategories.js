const fetchCategories = async () =>{
    const response = await fetch('categories.json')
    const data = await response.json()
    return data
}

export default fetchCategories
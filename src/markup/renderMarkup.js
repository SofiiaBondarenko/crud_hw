export function renderMarkup(items) {
    const item = items.map(({id, name, age, course, skills, email, isEnrolled})=>{
        return `<tr>
            <td class="student-id">${id}</th>
            <td class='student-name'>${name}</td>
            <td class='student-age'>${age}</td>
            <td class='student-course'>${course}</td>
            <td class='student-skills'>${skills}}</td>
            <td class='student-email'>${email}</td>
            <td class='student-status'>${isEnrolled ?'зарахований':'незарахований'}</td>
            <td><button data-action="update">оновити</button> <button data-action="delete">видалити</button></td>
          </tr>`
    }).join('')
    return item
}
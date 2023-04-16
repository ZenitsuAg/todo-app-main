// Implementing the Dark Mode
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const html = document.querySelector('html');

darkModeToggle.addEventListener('click', function() {
  html.classList.toggle('dark');
});

const input = document.querySelector('input');
const listCover = document.querySelector('.list-cover');
const all = document.querySelectorAll('#all');
const active = document.querySelectorAll('#active');
const completed = document.querySelectorAll('#completed');
const items = document.querySelector('.items-left');
const clearCompleted = document.querySelector('#clear-completed');

function updateItemCount() {
    const itemCount = document.querySelectorAll('.cover-div:not(.completed)').length;
    const itemCountText = itemCount === 1 ? '1 item left' : `${itemCount} items left`;
    document.querySelector('.items-left').textContent = itemCountText;
}
// Add the event listener so that when the enter key is pressed, a new todo is created
input.addEventListener('keyup', (e) => {
    e.preventDefault();
    
    if (e.key === 'Enter') {
        const inputValue = input.value.trim(); // remove leading/trailing spaces
            if (inputValue.length === 0) {
            // if input is only spaces or empty, return false
            return false
            }
        const todoCover = document.createElement('div');
        const circle = document.createElement('div');
        const para = document.createElement('p');
        const crossIcon = document.createElement('div');
        const check = document.createElement('img');
        
        para.textContent = input.value;
        input.value = '';
        input.focus();
        
        todoCover.setAttribute('class', 'cover-div');
        todoCover.setAttribute('draggable', 'true')
        circle.setAttribute('class', 'circle')
        para.setAttribute('class', 'para')
        crossIcon.setAttribute('class', 'cross-icon')
        check.setAttribute('class', 'hidden');

        listCover.appendChild(todoCover);

        todoCover.appendChild(circle);
        todoCover.appendChild(para);
        todoCover.appendChild(crossIcon);
        circle.appendChild(check);

        // The event listener for the circle for when you mark the todo as done
        circle.addEventListener('click', () => {
            circle.classList.toggle('circle');
            circle.classList.toggle('circle-checked');
            para.classList.toggle('dark:text-dark-grayish-blue')
            para.classList.toggle('text-dark-grayish-blue')
            para.classList.toggle('line-through');
            check.src = './images/icon-check.svg';
            check.alt = 'icon-check';
            check.classList.toggle('hidden');

            if (circle.className === 'circle-checked') {
                todoCover.classList.add('completed')
            } else if (circle.className === 'circle') {
                todoCover.classList.remove('completed')
            }

            updateItemCount()
        })        

        crossIcon.addEventListener('click', () => {
            listCover.removeChild(todoCover);
            updateItemCount();
        })


        todoCover.addEventListener('mouseover', () => {
            crossIcon.style.visibility = 'visible';
        })
        todoCover.addEventListener('mouseout', () => {
            crossIcon.style.visibility = 'hidden';
        })
        
        all.forEach(all => all.addEventListener('click', () => {
            if(circle.className === 'circle-checked' || circle.className === 'circle') {
                todoCover.style.display = 'flex'
            }
        }))
        
        active.forEach(active => active.addEventListener('click', () => {
            if(circle.className === 'circle-checked') {
                todoCover.style.display = 'none';
                updateItemCount()
            } else {
                todoCover.style.display = 'flex'
            }
        }))

        completed.forEach(completed => completed.addEventListener('click', () => {
            if(circle.className === 'circle') {
                todoCover.style.display = 'none';
                updateItemCount()
            } else {
                todoCover.style.display = 'flex'
            }
        }))
        
        clearCompleted.addEventListener('click', () => {
            if (todoCover.className === 'cover-div completed') {
                listCover.removeChild(todoCover)
            }
        })

        // The drag and drop API
        const cover = listCover.querySelectorAll('.cover-div');
        cover.forEach(cover => {
            cover.addEventListener('dragstart', () => {
                // Add dragging class to cover after delay
                setTimeout(() => cover.classList.add('dragging'), 0)
            })
            // Removing dragging class from item on dragend event
            cover.addEventListener('dragend', () => cover.classList.remove('dragging'))
        });


        const initSortableList = (e) => {
            e.preventDefault();
            const draggingItem = listCover.querySelector('.dragging');
            // Getting all items except currently dragging and making array of them
            const siblings = [...listCover.querySelectorAll(".cover-div:not(.dragging)")]

            // Finding the sibling after which the dragging item should be placed
            let nextSibling = siblings.find(sibling => {
                return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
            });
            
            // Inserting the dragging item before the next sibling
            listCover.insertBefore(draggingItem, nextSibling)
        }

        listCover.addEventListener('dragover', initSortableList);

    }
    updateItemCount()
})

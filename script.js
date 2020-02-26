var input_name = document.getElementById('name')
var input_section = document.getElementById('section')
var input_grade = document.getElementById('grade')
var input_exam_type = document.getElementById('exam-type')
var input_subject = document.getElementById('subject')
var add_btn = document.querySelector('.add')
var find_btn = document.querySelector('.find')
var disp_box = document.getElementById('disp-data')
var rows = []
var j = 0
var avg = document.getElementById('avg')
var calc_type = document.getElementById('typ')
var avg_btn = document.querySelector('.avg-btn')
var min_btn = document.querySelector('.min-btn')
var max_btn = document.querySelector('.max-btn')
var avg_div = document.getElementById('avg-div')

function addRow()
{   
    rows[j] = document.createElement('tr')
    var local_td = []
    for(var i=0; i<5; i++)
    {
        local_td[i] = document.createElement('td')
        rows[j].appendChild(local_td[i])
        local_td[i].textContent = i
    }

    local_td[0].textContent = input_section.options[input_section.selectedIndex].value 
    local_td[1].textContent = input_name.value
    local_td[2].textContent = input_subject.value
    local_td[3].textContent = input_grade.value
    local_td[4].textContent = input_exam_type.options[input_exam_type.selectedIndex].value

    disp_box.appendChild(rows[j])
    j++;
    console.log(rows.length)
}
function removeRows()
{   
    console.log("in remove")
    rows.forEach(function(local_tr)
    {
        local_tr.remove()
    })
}
function resetDisplay()
{
    var curr_rows = disp_box.children
    console.log(curr_rows)
    for(var i=0; i<curr_rows.length; i++)
    {   
        curr_rows[i].style.backgroundColor = '#F1F8E9'
    }
}
function dispSelected()
{   
    resetDisplay()
    var section = input_section.options[input_section.selectedIndex].value
    var name = input_name.value
    var subject = input_subject.value
    var grade = input_grade.value
    var type = input_exam_type.options[input_exam_type.selectedIndex].value
    removeRows()
    rows.forEach(function(local_tr, index)
    {
        var local_tds = local_tr.children
        if(local_tds[0].textContent == section || section == "Section")
        {
            if(local_tds[1].textContent == name || name == "")
            {
                if(local_tds[2].textContent == subject || subject == "")
                {
                    if(local_tds[3].textContent == grade || grade == "")
                    {
                        if(local_tds[4].textContent == type || type == "Exam-Type")
                        {   
                            console.log("INSIDE")
                          //  local_tr.style.display = 'table-row'
                            disp_box.appendChild(local_tr)
                        }
                    }
                }
            }
        }
    })
}
function changeDisplay(avg_value)
{
    var curr_rows = disp_box.children
    console.log(curr_rows)
    for(var i=0; i<curr_rows.length; i++)
    {   

        var local_tds = curr_rows[i].children 
        if(avg_value > parseInt(local_tds[3].textContent))
            curr_rows[i].style.backgroundColor = '#EF9A9A'
            else 
            curr_rows[i].style.backgroundColor = '#A5D6A7'
    }
}
function calcAvg(){
    resetDisplay()
    var sum = 0, count = 0
    var curr_rows = disp_box.children
    console.log(curr_rows)
    for(var i=0; i<curr_rows.length; i++)
    {
        var local_tds = curr_rows[i].children
        console.log(local_tds, " this here") 
        sum+= parseInt(local_tds[3].textContent)
        count++
    }
    var avg_value = Math.ceil(sum/count)
    typ.textContent = "            Average : "
    avg.textContent = avg_value
    changeDisplay(avg_value)
}
function calcMin(){
    resetDisplay()
    var curr_rows = disp_box.children
    var temp = curr_rows[0].children
    var min_value = parseInt(temp[3].textContent)
    console.log(curr_rows)
    for(var i=0; i<curr_rows.length; i++)
    {
        var local_tds = curr_rows[i].children 
        if(min_value > parseInt(local_tds[3].textContent))
            min_value = parseInt(local_tds[3].textContent)
    }
    typ.textContent = "Minimum : "
    avg.textContent = min_value
}

function calcMax(){
    resetDisplay()
    var max_value = 0
    var curr_rows = disp_box.children
    console.log(curr_rows)
    for(var i=0; i<curr_rows.length; i++)
    {
        var local_tds = curr_rows[i].children 
        if(max_value < parseInt(local_tds[3].textContent))
            max_value = parseInt(local_tds[3].textContent)
    }
    typ.textContent = "Maximum : "
    avg.textContent = max_value
}


add_btn.addEventListener('click',addRow)

find_btn.addEventListener('click',dispSelected)

avg_btn.addEventListener('click',calcAvg)

min_btn.addEventListener('click',calcMin)

max_btn.addEventListener('click',calcMax)
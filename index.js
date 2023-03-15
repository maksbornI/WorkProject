let matVolume = 0
let partId = '0'
let productType
let sameSizeArr = []
const getEl = function (id) {
    return document.getElementById(id)
}
const getId = {
    blockId: getEl('productList'),
    modelsList: getEl("modelsList"),
    volume: getEl("volume"),
    multiSizeHtml: getEl("multiSizeHtml")
}
// 1
let getModelList = (productType, buttonId, count) => {

    let partName = ""
    let partList = ""
    for (let i in productType.partOfModel) {

        if (productType.partOfModel[i].id === buttonId) {
            partName = productType.partOfModel[i].id
            //blockOperatorCreate
            partList = productType.partOfModel[i].partItem.map(item => {
                    return getMaterialSize(item, count)
                }
            ).join(' ')
        }

    }
    let html = `<div class="block">${productType.id.toUpperCase()}_${partName} -${count} SZT
${partList} </div> `


    addHtmlToListsArr(productType, listsHtml, html)

    getId.volume.innerHTML = materialsArrCreate()
    genHtml(listsHtml, getId.blockId, count)

}
//2 map material array
let getMaterialSize = (item, count) => {

    let nameOfOperator = item.nameOfOperator
    let materialSize = item.material.map(material => {
        let multiMaterial = getCopy(material)
        getSameMaterialArr(multiMaterial, count)
        return getSizeHtml(material, count)

    }).join(' ')
    return `<div class="item block"><b>${nameOfOperator}</b> ${materialSize}</div>`
}
//3 maping multiArr

let getSameMaterialArr = (multiMaterial, count) => {

    let materialNotExist = true
    sameSizeArr.map(sameItem => {

        if (sameItem.id === multiMaterial.id) {
            let diffSize = true;
            multiMaterial.size.map(el => {
                sameItem.size.forEach(size => {
                    if (size[0] === el[0] && size[1] === el[1]) {
                        size[3] += el[3] * count
                        size[5] = "*"
                        materialNotExist = false
                        return diffSize = false
                    }
                })

                if (diffSize) {
                    sameItem.size.push(el)
                    materialNotExist = false;
                }
            })
        }
    })
    if (materialNotExist) {
        multiMaterial.size.forEach(el => {
            el[3] = el[3] * count
        })
        sameSizeArr.push(multiMaterial)
        // sameSizeArr.sort((a,b)=>b-a)
        return sameSizeArr
    }

}
//4 штмл для списк первого
let getSizeHtml = function (material, count) {
    let clasOfItem = "sameSizeBlock";
    count ? clasOfItem = "item operator" : clasOfItem
    let materialKind = material.id
    for (let i in warehouse) {
        if (materialKind === warehouse[i].id) {
            matVolume = warehouse[i]
        }
    }


    let sizeHtml = material.size.map(el => {

        return elementCreate(el, count)
    }).join(' ')

    return `<a class=${clasOfItem}> <b>${materialKind}</b> ${sizeHtml}</a>`

}
//5
let elementCreate = (el, count) => {
    partId++

    if (count) {
        if (el[4]) {
           if (matVolume.id.slice(0,5) ==='SOSNA') {warehouse.uniSosna.value += el[0] / 1000 * el[1] / 1000 * el[2] / 1000 * el[3] * count
           } else { matVolume.value += el[0] / 1000 * el[1] / 1000* el[3] * count }
            return ` 
<li class="size">
<lable for="${partId}">
 ${el[0]}x${el[1]}x${el[2]}     ${el[3] * count}   SZT    ${el[4]}
</lable
<input type="checkbox" name="sizeBox" id="${partId}"/>

</li>`
        } else {
            if (matVolume.id.slice(0,5) ==='SOSNA') {warehouse.uniSosna.value += el[0] / 1000 * el[1] / 1000 * el[2] / 1000 * el[3] * count
            } else { matVolume.value += el[0] / 1000 * el[1] / 1000* el[3] * count }
            return `
<li class="size">
<lable for="${partId}">
${el[0]}x${el[1]}x${el[2]}     ${el[3] * count} SZT 
</lable>
<input type="checkbox" name="sizeBox" id="${partId}" />
</li>
`
        }
    } else {
        if (el[4]) {
            return `
<li class="size">
<lable for="${partId}">
 ${el[0]}x${el[1]}x${el[2]}  ${el[3]} SZT  ${el[4]}
</lable>
<input type="checkbox" name="sizeBox" id="${partId}" />
</li>`
        } else {
            return `
<li class="size">
<lable for="${partId}">
${el[0]}x${el[1]}x${el[2]}     ${el[3]} SZT 
</lable>
<input type="checkbox" name="sizeBox" id="${partId}" />
</li>
`

        }
    }
}
//6
let addHtmlToListsArr = (productType, listsHtml, html) => {

    for (let i in listsHtml) {
        let newHtml = html;
        if (listsHtml[i].name === productType.id)
            return (listsHtml[i].objHtml ? listsHtml[i].objHtml += newHtml : listsHtml[i].objHtml = newHtml)
    }

}

//7 the last operation add html
function genHtml(listsHtml, blockId,) {
    let htmlList = ' '
    for (let i in listsHtml) {
        let newHtml = `
                       
         ${listsHtml[i].objHtml}  
    
            `
        htmlList += newHtml
        blockId.innerHTML = htmlList
    }

    getId.multiSizeHtml.innerHTML = sameSizeArr.map(material => {
        return getSizeHtml(material)

    }).join(' ')
}

// copy
let getCopy = (arr) => {
    let newArr = {}
    newArr.id = arr.id
    newArr.size = []
    arr.size.map(el => {
        newArr.size.push(el.slice(0))
    })

    return newArr
}
let materialsArrCreate = () => {
    let matArray = ' '
    for (let i in warehouse) {
        if (warehouse[i].id[0]==='S') {
            warehouse.uniSosna.value+=warehouse[i].value
            warehouse[i].value= 0}
    if (warehouse[i].value) {
            matArray +=`
<div class="size">
     ${warehouse[i].id} = ${warehouse[i].value.toFixed(3)} ${warehouse[i].units}, cena = ${warehouse[i].value.toFixed(3)*250} zl
 </div>`
        }
    }

    return matArray
}
// return to 3

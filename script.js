const searchInput = document.getElementById("searchBox")
const profileContainer = document.getElementById("profileContainer")

async function func2() {
    const Response = await fetch("https://api.github.com/users")
    const data = await Response.json()
    console.log(data);
    profileContainer.innerHTML = ""

    data.map((ele)=>{
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(userName, avatar, profile, profileContainer);
        profileContainer.innerHTML += `
            <div class="innerDiv">
                <img src= ${avatar} style="height :45px; width:45px" />
                <div>
                    <h3 style="color: white;">${userName}</h3>
                    <a href=${profile} style="color: #4d4c4b; text-decoration: none;" >View profile</a>
                </div>
            </div>
        `
    })

}
func2()


async function func() {
    const SearchValue = searchInput.value 
    const Response = await fetch(`https://api.github.com/search/users?q=${SearchValue}`)
    const data = await Response.json()
    console.log(data.items);
    profileContainer.innerHTML = ""

    data.items.map((ele)=>{
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(userName, avatar, profile, profileContainer);
        profileContainer.innerHTML += `
            <div class="innerDiv">
                <img src= ${avatar} style="height :45px; width:45px" />
                <div>
                    <h3 style="color: white;">${userName}</h3>
                    <a href=${profile} style="color: #4d4c4b; text-decoration: none;">view profile</a>
                </div>
            </div>
        `
    })

}

function clearFunc() {
    profileContainer.innerHTML = ""
    searchInput.value = ""
    // func2()
}


const UserCard = () => {
    return(
        <div class="box has-text-centered has-background-white">
            <div>
                <div class="flex-shrink-0">
                    <a href="#" class="image is-64x64 m-auto">
                        <img alt="profil" src="/images/person/1.jpg" class="is-rounded"/>
                    </a>
                </div>
                <div class="mb-4">
                    <p class="has-text-grey-dark">
                        Charlie
                    </p>
                    <p class="has-text-grey-dark-light is-size-7">
                        CTO
                    </p>
                </div>
                <button class="button is-primary ">
                    Add
                </button>
            </div>
        </div>
    )
}

export default UserCard
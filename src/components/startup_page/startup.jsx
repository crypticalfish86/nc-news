export const StartupPage = () =>
{
    function navArticles(event)
    {
        event.preventDefault()
    }

    return(
        <div id="Startup_Page">
            <h1>Startup</h1>
            <p>
                Hello and welcome to my website ^^, The function of this
                web-page is to act as a template for future website designs
                and an experimental page for me to test out concepts and newly learned
                fucntionality of react libraries and coding in JSX. Click the button below
                to begin searching my website!

                Made by: Jace Weerawardena
                INSERT IMAGE
            </p>
            <button onClick={(event) => {navArticles(event)}}>Click here to see all articles</button>
        </div>
    )
}
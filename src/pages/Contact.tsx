import * as React from 'react'
import Header from 'src/components/Header';

class ContactPage extends React.Component
{
    public render()
    {
        return (
            <div>
                <Header headerText="Contact" />
                <form method="POST" id="contactForm" action="//formspree.io/rrgraute@gmail.com">
                    <div className="row">
                        <div className="small-3 column">
                            <label htmlFor="voornaam" className="right inline">Voornaam</label>
                        </div>
                        <div className="small-9 columns">
                            <input id="voornaam" type="text" required={true} name="voornaam" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-3 column">
                            <label htmlFor="achternaam" className="right inline">Achternaam</label>
                        </div>
                        <div className="small-9 columns">
                            <input id="achternaam" type="text" required={true} name="achternaam" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-3 column">
                            <label htmlFor="bedrijf" className="right inline">Bedrijfsnaam</label>
                        </div>
                        <div className="small-9 columns">
                            <input id="bedrijf" type="text" required={true} name="bedrijf" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-3 column">
                            <label htmlFor="email" className="right inline">Email</label>
                        </div>
                        <div className="small-9 columns">
                            <input id="email" type="text" required={true} name="email" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-3 column">
                            <label htmlFor="bericht" className="right inline">Bericht</label>
                        </div>
                        <div className="small-9 columns">
                            <textarea name="bericht" id="bericht" rows={9} /> <br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-3 columns" />
                        <div className="small-9 columns">
                            <input type="submit" value="Verstuur" className="button"/>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default ContactPage
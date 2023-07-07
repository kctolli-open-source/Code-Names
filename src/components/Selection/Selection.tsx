'use client';

export default function Selection ({data}: any) {
    const { assassin, red, blue } = data;

    return (
        <section>
            <br /><hr />
            { assassin && 
                <p>
                    <b>Assassin: </b> 
                    {assassin}
                </p>
            }
            { red &&
                <p>
                    <b>Red ({red.length}): </b> 
                    {red.join(', ')}
                </p>
            }
            { blue &&
                <p>
                    <b>Blue ({blue.length}): </b> 
                    {blue.join(', ')}
                </p>
            }
            <hr /><br />
        </section>
    );
}

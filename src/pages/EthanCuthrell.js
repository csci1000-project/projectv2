export default function examplePage() {
  return (
    <div className='container'>
      <title>Website</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Hey, I'm Ethan Cuthrell. </h1>
        </div>
        <img
          className='pic'
          src='https://travelboulder.com/wp-content/uploads/2019/01/Northern-Colorado-sunset-by-Jim-Heckel-1200x800.jpg'
          alt='sunset'
        />

        <p className='description'>
          Hello, my name is Ethan Cuthrell. I am a freshman computer science student at CU boulder. I started coding in middle school and can program in Python, Java, and C++. I am originally from California and am new to Colorado. My favorite sport is badminton which I played for my high schools team. I also enjoy playing video games and reading.
        </p>

        <a className='button' href='/'>
          <p> Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          /* border-bottom: solid black; */
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .pic {
          height: 450px;
          width: 450px;
        }

        .button {
          /* margin: .5rem; */
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
import React from 'react'
// import image files
import googleLogo from "../assets/Google-icon.svg"
import xLogo from "../assets/Xlogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div>
        {/* Header. */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-md">

          <header className="text-center mb-10">
            <h1 id="signup-title" className="text-4xl font-bold tracking-tight text-slate-900">
              Regisztráció
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Add meg az e-mail címed és jelszavad a regisztrációhoz!
            </p>
          </header>

          <form className="space-y-5">

            {/* Name. */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-slate-900">
                  Vezetéknév
                  <span aria-hidden="true" className="text-red-600">*</span>
                </label>

                <input
                  id="lastName" name="lastName" type="text"
                  
                  autoComplete="family-name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3
                         outline-none transition
                         focus-visible:ring-4
                         focus-visible:ring-blue-200
                         "
                  placeholder="Teszt" required/>
              </div>

              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-slate-900">
                  Keresztnév
                  <span aria-hidden="true" className="text-red-600">*</span>
                </label>

                <input id="firstName" name="firstName" type="text" autoComplete="given-name" className="w-full rounded-xl border border-slate-300 px-4 py-3
                        outline-none transition
                        focus-visible:ring-4
                        focus-visible:ring-blue-200"
                  placeholder="Elek" required/>
              </div>

            </div>

            {/* E-mail address. */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                Email cím
                <span aria-hidden="true" className="text-red-600">*</span>
              </label> 
              <input id="email" name="email" type="email" autoComplete="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus-visible:ring-4 
              outline-none transition
              focus-visible:ring-blue-200 
              " placeholder="example@mail.com" required/>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-900">
                Jelszó
                <span aria-hidden="true" className="text-red-600">*</span>
              </label>

              <div className="relative">
                <input id="password" name="password" type="password" autoComplete="new-password" className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 
                outline-none transition
                focus-visible:ring-4 
                focus-visible:ring-blue-200 " placeholder="************" required/>
                <button type="button" aria-label="Jelszó megjelenítése" className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-2 text-slate-500 hover:bg-slate-100">
                    <FontAwesomeIcon className="transition opacity-50" icon={faEyeSlash} />
                </button>
              </div>
            </div>

            {/* Terms */}
            <fieldset>
              <legend className="sr-only">
                Felhasználási feltételek elfogadása
              </legend>

              <div className="flex items-start gap-3">
                <input id="terms" type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-300" required/>
                <label htmlFor="terms" className="text-sm leading-6 text-slate-500">
                  Fiók létrehozásával elfogadja a
                  <a href="#" className="font-medium text-slate-900 "> Felhasználási feltételeket</a>,
                  és az
                  <a href="#" className="font-medium text-slate-900"> Adatvédelmi irányelveinket
                  </a>
                </label>
              </div>
            </fieldset>

            {/* Submit */}
            <button
              aria-label="Regisztráció"
              type="submit" 
              className="w-full transition rounded-xl bg-blue-600 px-5 py-3  text-white hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-300">
              Regisztráció
            </button>

            {/* Social logins */}
            <p className="text-center text-sm text-slate-600">
              Már van fiókja? <a href="#" className="font-semibold text-blue-600 hover:underline"> Bejelentkezés
</a>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4" role="separator">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="text-sm text-slate-400">Vagy</span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {/* Social */}
            <div className="grid gap-3 sm:grid-cols-2">

              <button aria-label="Google fiókkal való bejelentkezés" type="button" className="bg-slate-100 transition rounded-xl py-2 px-4 hover:bg-slate-200">
                <div className="inline-flex text-center items-center py-2 px-4">
                  <img src={googleLogo} alt="Google" className="fill-current w-5 h-5 mr-2"/><span> Google fiókkal</span>
                </div>
              </button>

              <button aria-label="X fiókkal való bejelentkezés" type="button" className="bg-slate-100 transition rounded-xl py-2 px-4 hover:bg-slate-200">
                <div className="inline-flex text-center items-center py-2 px-4">
                  <img src={xLogo} alt="X" className="x-logo text-black fill-current w-5 h-5 mr-2"/>
                  <span> X fiókkal</span>
                </div>
              </button>
    
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Topbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className="logo">
          <h2>PipeEye</h2>
        </div>

        <div className={styles.conjunto}>
          <ul>
            <li className={`${styles.Btn} ${styles.uploadBtn}`}>
              <Link to="/upload">Subir Imágenes</Link>
            </li>
            <li className={`${styles.Btn} ${styles.historyBtn}`}>
              <Link to="/historial">Historial</Link>
            </li>
          </ul>

          <div className={styles.porfile}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAVFhUXGCAYFxYYFxsgIBggIBogICAbHx8gJTArICUwJh8fKjorMDU1NTU1ICs6QDo2PzA1NTUBCgoKDg0ODhAPGDclHR8rLS0rODctKysrKy0tNystKy0rKysrKy0rKystNy0tKystKysrKy0rKy0rKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIEBwMFCAb/xABBEAABAwICCAMFBgQEBwEAAAABAAIDBBEFIQYSMTNBUXOyB2FxEzKBkaEIIkJSscEUI3LwNUPR4SQ0U2KSovEV/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIBEBAQADAAICAwEAAAAAAAAAAAECAxESITFBEyIyBP/aAAwDAQACEQMRAD8AuXCdxF029oUxQ8J3EXTb2hTEAhCEAhCECFUf9ofF3F1PRtdZtjK8X2m9m3+pV3SOABJ2DMrk3SnGH19ZPUPz1nlrOTWtNgB8P1RZGvpML1hcSWAHL+7ImoiXZHOykRlobct2nI3+tlvMFpteRrtUOOViRs9csllllxpjj15t1E78pvwyP9hQHQvJvnddCUWARFoJjBPOwzKhVGiETnhxhbtvZgFzy1r7Fn+Rp+FRTKRzgSbZcb/3dYalgGyyu7FvDuGQEsAiJ/C3j6nmvCz6AysuC4WB2nkuptjm6b9PH4bWPicHRvLXXyIOxdPeFulrsRpv5rmmaOwfbjcZOI4HI3/3XOE+DviJLhlewPO3EKwfAWsLcQfG2MESQnWcdrdVwNwfMkD5clpL1nljz5dBpUgSrtwEIQgEIQgEIQgiYtuJem7tKEYtuJem7tKECYTuIum3tCmKHhO4i6be0KYgEIQgEIQUGg05xR1JQVM7AC5kZsDzOX7rlgxkZ22/67dq6i8QqJ9Rh1VFGAXOjNgTttY/sud8aoBT6zXDPKzbbbi+SzyvONdevyladlWGkAMHJWZoJhsmT5GFrTmDbavCaD4c2eqZdtwDc/BXh7awN9gWWyttWDYssszH2WiOPRMGYcfQEp8GktK46hlDHcn/AHfqVi9Hpu5JAVr6qma4ZgfJSNcEXBBHMLFMRzUq8eG00wn2tPKG8BrgeY4fK6xfZ81TVVJy1vYtsONi4X+tlv8AGc4pcvwu7StH9n7DH+3mqdkfsvZ7D94lzTe/kGn5rbR2vL/o4vIJUgSr1PKEIQgEIQgEIQgiYtuJem7tKEYtuJem7tKECYTuIum3tCmKHhO4i6be0KYgEIQgEIQgw1LLtItwI+iqCjgjxCL27WtE0Lyx0biMnsuLO/7SFcblQ2PGXD9IHCJhbFVEawI+68Ft3EeYIXGc7G2nPxqbo3o8KaWRwa0MPu2Oy4uR8Ddemc3JYaI3HxU2MLx5Pbj8NVV4WJBb2kjf6XWUB+jTC1rS8vI2ukAOsORHD1XqWwXWBz2tOqTntsubXfix4VS6jC29gNgGxeSxvEq8zakN2NvZr7Ag7b3vsC9pSvBuQMlqY4dYG45/FOp4vHQVFTM149q55kBhs5lrPeQwWttF3XvyV46MYMyipoqdmxjQCbW1jbM/FeZ0Vw9r5y5w9wazfXZ9M17oL1aZ6eHf/XDkIQt2AQhCAQhCAQhCCJi24l6bu0oRi24l6bu0oQJhO4i6be0KYoeE7iLpt7QpiAQhCAQhIUDHutn8/LzVV6YaRwVr6T2DfaMbUSN9twa5jLFoG3MG4PGy2vjHpYKGjMTT/OqAWNsfdb+J/wABkPMqidEdITRSEPaXwSWEsY25e69vJw4c9nFc11j6sXJRS7OS2XC689TSizXMkEkbxrRyDY8fs4bC3gt3FMC1eTPHj6GFlPqalwGqOPHkOaQ0g1RqmzxnrDbnz5rI2FsltZtwFEmo/Z+6XhvDVe4fvZZRrPZlNi7o3OZIxzs7a4Aso3tjG4Hg7I34G6xTzSOOqyV5PAO1Dbz2XU6Ojs0NcddxNmi20nL5K86W+Py9dohFdr5OZsPgvRBQsIohBE2PkMzzPFTF7sJzGPlZ5eWVpyEl0XXbkqEIQCEIQCEIQRMW3EvTd2lCMW3EvTd2lCBMJ3EXTb2hTFDwncRdNvaFMQCEhWOWYNBLiABmSTkPM+SB5K8P4geI0GFj2YAlqSLtiBybfYXngPLaV4/xC8YQ3Wp8ON3bHVHAcwwHafPYqUqKh0jnPe4uc43c5xJJPMlBsdIdIKjEJjPUSazjkBsDRe4a0cAFrC1McnMdwUV6HRjSWSjJa674XG7477D+dhOx367DzFs4LiMU7A5r9YEfdI4+RHA8xtVEhbfR7HpKOTWYA5hyfGb2cP2PIjMemS4ywmTTXsuK7Y6n2btUnJbOGpFttl5/CYxiEAmo3e2aPficQJYnfldwd5HiodU10R1Xukidwa4fpdebLXyvVjulbyvqwzO+3Yt7olRxNHt5JIzIdg12nU8tu1eMwV0c9SIzryau3W43/D8tqqDTLCv4OsnhBu0P1mO5tdm0/IrvVh91lv2W8jr1rw73SD6EJSVxdS4jNFlHNIz+l7h+hXpcL8SsVpyNWse8D8Mlng/PP6r02PK6sSqqfD3xdFbK2mqomxSvyY9p+6535SD7pPDgrVYbqBwTk0JysAhCFQIQhBExbcS9N3aUIxbcS9N3aUIEwncRdNvaFMUPCdxF029oWr000oiwymdUS5n3WM4vedjR+voEEjSLSKmoIva1MrWN2AbS48mt2krnrxA8S6jEi6Jl4qa+7HvP83kbfQZBeZ0i0gqMQmM9RJrP2AD3WD8rRwC1l0GK6FlTS1RTQkITvr5pQUCscsgKwEWzT2PQbrRnSGfDp21FO6zhk5p917b5tcOX6LoLCtJIMUpJKhguGRnXjcATG/VN222+YIyK5lutzovpFNh84mhN7jVkYdkjeLSP0PBSzqy8sXJoU+Olo318rbmVzi07RYA2vyuW2VDYrXvqZZJ5Dd8ji5x9eHkFf2i1XBiuFSU8QLdVroi07Wk3cw+l8r+S57niLSWkWLSWn1BUxnFyvlesVkpQ1KunJY3FpBaSCDcEcDtFviupvC/S4YnSB7ifbR2ZN/VbJw8iM/muWbLdaH6Tz4bUtniJI2PZfKRv5T+x4Ijr1KFrdH8ahroGTwPDmOHD8Jtm08iFskCoQhUCEIQRMW3EvTd2lCMW3EvTd2lCBMK3EXTb2hUh9ofFNaop6UbI2GQ+rzYfQFXhhW4i6be0LnXx5B//AFXX/wCjHb/2/wB0FdISJQoFCcEgT7IGuCaf78lksmOyRStWJ7OKeRZP2oEYU4OWEgjYlEnP5oPS6FaVS4XOJYxrMdlLHf32/sRwKjaZSQvrJZad2tFMfat4Ea2Za4cCDcWWmBSORDAE5NKUIoBSHahyLoiyPBLS00dX/DSPtBUG2zZIbBpvwvsPwXSIXFMbrEEEgjMEcDwI810D4R+JP8Y0UlZJ/wASN3IbD2w5f1D6oLWCVMYU9UCEIQRMW3EvTd2lCMW3EvTd2lCAwncRdNvaFQP2hIrYjG63vQDPnZx/1V+4TuIum3tCpb7R8J9rRvtlqSNv6FpsgplKEiVQOCemBPCBU1yckIQYxnlyTmJpyN053NFKVjexZAUiCPYhPbJzCe5qaRf1RCpbJjCnhA16bdPftTXBA5K1xBBBsRsIyItsN+HqmD0TkV0L4X+J8VUxtNWSCOobZrXONhMOdzsdzvtVpNddcT3/APisTQvxZq6ENim/nwNys732i/4XcfQqo6XQoODYpFVwsnheHRvF2kfoeRCnIImLbiXpu7ShGLbiXpu7ShAmE7iLpt7Qq1+0LQ69DFLxjmA+DgQf2VlYTuIum3tC874p4V/FYXUx8Ws9o31YdZBymhASqKUJ4TLp4KIVBRdCBjmpjXcFkJWJzeKKyBCaClugcUhSEoDggwXzWVpWJ21PAVQpKn4ZhvtmyO1w0MaT6m2zaoICyRyuaC0OIB2gHI+qldS+/b0+PY1A6jZTMa0vBDrge7YZi68nZPDUaqGV6bZJZPITHIjob7PeIF9BJETupiB5Bwv/AKq1Audvs+Yw+OtkpfwTRl3o5mYPyJC6JCqIuLbiXpu7ShGLbiXpu7ShAmE7iLpt7Qs1RCHtLXC7XAgjmCLFYcJ3EXTb2hTEHIOmmjz8OrJKd4yBux35mH3SP0+C0auL7RlJaakltkWPYfgQRn8VTiinBKE1LdA8JUxOCIWya4J10W80VJwjDX1UoiYQCeJ8lamA+HlLGAZmmV/HXuAPQD91VOG1slNK2aM2c3ZfPaLEFXRoJpe2tY4y6kb4/fF7N1T+MXOXIjgbLPPy+m2vx+00aE0RH/KRf+KzM0KoxkKSH1LAvSUs7JW6zHteNl2uBH0U2ONZdrT9XN/iBo+2irXxsb9xzRIwcgeHwIK0+FUTZpBEXAOeLMPDW4Ajkdl+F1fmmeEYdJP7avB/lQgtILrEBxLgQMybkfNeTl8QsLpTahwoXH43Ma08Be5uSt5fTz35qo5I3MJa4EEGxB4EZEJisfT3RoyuNZEGgPbrvaNhOZIbyNs1XVxwVl6lhAUoSFICqgKY5PJSxRF7g1oJcTYNAuTfgAg934Exk4tGRwjkJ9NWy6cCrDwf8P5MND6ioI9tK0NDB/ltvcgnn6KzwqiLi24l6bu0oRi24l6bu0oQJhO4i6be0KYoeE7iLpt7QpiCn/tF0pdTU0gGTJXAn+puX1CoRdQeNFB7bCZ7C5j1ZB8HC9vgVy+UC2ShNDk8BQKAnBJZKEU5CAlQMITCnuSWQbLR3SCooJRJA8jP7zfwvHJw/dXpor4h0ta3N7YZOMcjgPO7XHIj6hc7uSFq5uMqzKxfXiPjdLqiOWbVZJG4F0dnG2wEAGxOd/gq1pqrDNfVZDJM4/5lVKIox6sjBJ4G1140jZmm2Vk4ZXq58V0oo2UTYP4qKR7Trfy2kNzsA1oOdgBa5VQ1BaXOLPdubfHgopalhKsiVkKULe6JaMzYlOIYdXWtc6xADW3zceJtyH0VvYP4G0rHa1RUSS5ZsYNRt/XM2+KIo3DcNmqZBDBE6R7tjWi9/M8h5nJdC+GnhlHh1qio1ZKojL8sXMN5nz+S9jgGjNHQNIpqdkd/eIGbrc3bStwFQjU5CEETFtxL03dpQjFtxL03dpQgTCdxF029oUxQ8J3EXTb2hTEEaupmyxvjeLte0scPIixXG2KwNimkja7Wax7mNdzAJAXVHidiD6bDKqWN2q8Ms0jhdwH6Erk53Pj/AHtQY1lY5Y7FCgkhCxMkWQFA8ISJQgRNKeU0opqWyLJpkHK6Ac1NS/H/AGQga4JI2ninBKEFg+Bc2pi0Y/NHI36A/sulwuX/AAX/AMXp/R/YV1AFUKhCEAhCEETFtxL03dpQjFtxL03dpQgTCdxF029oUxCEFfeORthE2dvvsHr97YuZihCATHIQoGBZWyc0iEGUOShCEC3TSUqEVjPmkyQhAJbIQgdZKAhCD23g3/i9N6P7CuoAhCqFQhCAQhCCJi24l6bu0oQhB//Z" alt="" />
            <div className={styles.infoPorfile}><p>Laila Dejtiar</p>
            <div className={styles.rol}>Administrador</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

# Decoder Ring

This app allows the user to encode or decode messages using one of three differenct ciphers.

The learning objective of this assignment was to write and test complex algorithms.
We used Mocha and Chai for testing.

The first cipher is the ***Caesar Shift***.
This simply shifts letters "up" or "down" the alphabet by the specified number of letters, "wrapping" around the ends, if necessary.
E.g. if one would shift 'no' by 3 or -3, the output would be 'rs' or 'kl', respectively.

The second cipher is the ***Polybius Square***.
|   | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| **1** | A | B | C | D | E |
| **2** | F | G | H |I/J| K |
| **3** | L | M | N | O | P |
| **4** | Q | R | S | T | U |
| **5** | V | W | X | Y | Z |
Each letter in the table corresponds to the number created by concatenating its coordinates, i.e. A would be 11, B would be 21, etc.
Column value comes first. I and J share the number 42, which presented an interesting problem.

The third cipher is the ***Substitution Cipher***.
This allows for the substitution of any alphabet, without repeated letters. E.g. with the following cipher,
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| M | K | R | J | O | A | W | V | L | Y | E | X | B | F | N | Q | Z | G | C | I | D | T | P | U | H | S |
'no' would encode to 'fn' or decode to 'oe'.

The ciphers preserve punctuation and ignore capitalization.

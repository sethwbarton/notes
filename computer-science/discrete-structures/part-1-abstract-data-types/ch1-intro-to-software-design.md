# Chapter 1: Introduction to Software Design


I'll just say that coming back to this material after years of taking it for granted is interesting. Me from 5 years ago
was deeply concerned about these topics but by now they are so ingrained into my head that I hardly think about them - I just
expect tha they're there. We'll see if I pick anything new up from these chapters, but I suspect it will be mostly skimming through
the content.

## 1.1: The Software Lifecycle

So, the method they've chosen to go with here is the waterfall model of the software lifecycle.

Here are the steps to the waterfall model:
1. Requirements - the requirements for the new system are determined.
2. Analysis - Requirements are studied and clarified. And the structure of the solution is determined. Each major subsystem
is analyzed, and its component classes are determined. I'll just say, this seams like this is where waterfall goes terribly wrong.
3. Design - Detailed algorithms and data fields for each class are designed.
4. Implementation - The classes and functions are implemented.
5. Testing both unit and integration.

So, this book may be outdated (which isn't surprising to me since I got it when iw as freshman). But now that I've had experience
in the field with writing large software systems it's painfully obvious that this method only could work for the largest of
corporations. For a small company, this would absolutely kill investors and customers. Obviously, that's why we use agile software
development. But in another sense, this workflow happens all the time. Every time I sit down to complete a new task at work
I go through these steps for whatever task I'm about to embark on.

That is, unless I was doing TDD, in which case writing tests would come after the analysis and after I have an understanding
about how my piece is supposed to behave.

After skimming through these initial sections of the book, I don't think it's worth my time to read through it all.
Let's move on to implementing some data structures in TypeScript!








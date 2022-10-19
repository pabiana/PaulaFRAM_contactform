<!DOCTYPE html>
<html>

<head>
    <title>PAULAFRAM</title>
    <img src="logoSignature.jpg" alt="paulafram.top" width="165.8" height="74.6"> 
    <a href="https://www.paulafram.top">Computer Science</a>
    <b href="https://www.paulafram.top">Social Sciences</b>
    <c href="https://www.paulafram.top">Language Aquisition</c>
    <d href="https://www.paulafram.top">Other</d>
</head>

<body>
<h1>Leave a message</h1>
<form action="/action_page.php">
    <p>Full Name</p>
    <label for="fname">First name: </label>
    <input type="text" id="fname" name="fname">
    <label for="lname">Last name: </label>
    <input type="text" id="lname" name="lname"><br>

    <p>Pronouns:</p>
    <input type="radio" id="pShe" name="pronouns" value="SHE">
    <label for="pShe">She/her</label><br>
    <input type="radio" id="pHe" name="pronouns" value="HE">
    <label for="pHE">He/his</label><br>
    <input type="radio" id="pThey" name="pronouns" value="THEY">
    <label for="pTHEY">They/them</label><br><br>

    <label for="contactMedium">Preferred contact medium:</label>
    <select name="contactMedium" id="contactMedium">
      <option value="phone">Phone</option>
      <option value="email">Email</option> <br>
    </select><br><br>
    <label for="phone">Phone: </label>
    <input type="numeric" id="phone" name="phone"><br>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email"><br>

    <p>Subject:</p>
    <input type="radio" id="question" name="subject" value="QUESTION">
    <label for="question">Question</label><br>
    <input type="radio" id="suggestion" name="subject" value="SUGGESTION">
    <label for="suggestion">Suggestion</label><br>
    <input type="radio" id="offer" name="subject" value="OFFER">
    <label for="offer">Offer</label><br><br>

    <p><label for="message">Message:</label></p>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    <br><br>

    <label for="agreement">I agree to be contacted regarding my message: </label>
    <input type="checkbox" id="agreement" name="agreement" value="AGREEMENT"><br><br>

    <input type="submit" value="Submit">
</form>

</body>

</html>
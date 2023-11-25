<!-- create a chess board using table tag. -->
<?php
echo "<table width=270px height=270px border=1>";
for ($i = 1; $i <= 8; $i++) {
    echo "<tr>";
    for ($j = 1; $j <= 8; $j++) {
        $total = $i + $j;
        if ($total % 2 == 0) {
            echo "<td height=30px width=30px bgcolor=#FFFFFF></td>";
        } else {
            echo "<td height=30px width=30px bgcolor=#000000></td>";
        }
    }
    echo "</tr>";
}
echo "</table>";
?>
<!--  -->
import javax.swing.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.*;

public class sqlConnection {
    public static Connection connect() {
        Connection con = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/java?useSSL=false", "root", "root");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        if (con != null) {
            System.out.println("Connection established");
        } else {
            System.out.println("Connection failed");
            return null;
        }
        return con;
    }

    public static void main(String[] args) throws SQLException {
        JFrame frame = new JFrame("SQL Connection");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setLayout(null);

        Connection con = connect();
        if (con != null) {

            JLabel label = new JLabel("Connection established");
            label.setBounds(50, 50, 200, 30);
            frame.add(label);

            JTextField queryWrite = new JTextField();
            queryWrite.setBounds(50, 75, 200, 30);
            frame.add(queryWrite);

            JButton queryButton = new JButton("Execute Query");
            queryButton.setBounds(50, 300, 200, 30);
            frame.add(queryButton);

            JTextArea queryResult = new JTextArea();
            queryResult.setBounds(50, 120, 200, 200);
            frame.add(queryResult);

            queryButton.addActionListener(e -> {
                try {
                    Statement stmt = con.createStatement();
                    ResultSet rs = stmt.executeQuery(queryWrite.getText());
                    String result = "";
                    while (rs.next()) {
                        for (int i = 1; i <= rs.getMetaData().getColumnCount(); i++) {
                            result += rs.getString(i) + " ";
                        }
                        result += "\n";
                    }
                    System.out.println(result);
                    queryResult.setText(result);
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            });

            frame.setVisible(true);
        } else {
            System.out.println("Connection failed");
        }

    }
}
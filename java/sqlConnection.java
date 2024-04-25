
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class sqlConnection {
    public static Connection getConnection() {
        Connection con = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            // Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/java", "root", "root");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return con;
    }
    
    public static void main(String[] args) {
        Connection con = getConnection();
        if (con != null) {
            System.out.println("Connection established");
        } else {
            System.out.println("Connection failed");
        }
    }

}
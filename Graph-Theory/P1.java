import java.io.*;

public class Lab1U13004126I {
    public static void main(String[] args) throws IOException {
        File file = new File("hikernet1.txt");
        BufferedReader br
                = new BufferedReader(new FileReader(file));

        String st;
        int n = 0;

        Hiker[] hikers = new Hiker[0];
        int index = -1;
        while ((st = br.readLine()) != null) {
            if (st.length() == 1) {
                n = Integer.parseInt(st);
                hikers = new Hiker[n];
            } else {
                String[] info = st.split(" ");
                hikers[index] = new Hiker(Integer.parseInt(info[0]), Integer.parseInt(info[1]), Integer.parseInt(info[2]));
            }
            index++;
        }

        for(Hiker hiker: hikers) {
            System.out.println(hiker);
        }

        int maxHikerReached = 0;
        int temp = 0;
        for (int i = 0; i < n; i++) {
            Hiker a = hikers[i];
            temp = 0;
            for (int j = 0; j < n; j++) {
                Hiker b = hikers[j];
                int distance = a.calculateDistanceBetween(b);
                if(a.power >= distance) {
                    temp++;
                }
            }
            maxHikerReached = Math.max(temp, maxHikerReached);
        }

        System.out.println("Maximum Hikers reached are: " + maxHikerReached);

        try {
            FileWriter fw = new FileWriter("hikernet1out.txt");
            fw.write(Integer.toString(maxHikerReached));
            fw.close();
            System.out.println("-------------------");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
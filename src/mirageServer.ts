import { createServer } from "miragejs";

const format = {
  month: "2-digit" as const,
  day: "2-digit" as const,
  year: "numeric" as const,
};

export function makeServer() {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedToday = new Date().toLocaleDateString("en-US", format);
  const formattedYesterday = yesterday.toLocaleDateString("en-US", format);

  return createServer({
    seeds(server) {
      server.db.loadData({
        metrics: {
          totalUsers: 120000,
          activeUsers: 35000,
          totalStreams: 4500000,
          revenue: 1200000,
          topArtist: {
            name: "Sonu Nigam",
            imgUrl: "https://wallpapercave.com/wp/wp4101518.jpg",
          },
        },
        userGrowth: [
          { month: "Jan", totalUsers: 80058, activeUsers: 20483 },
          { month: "Feb", totalUsers: 85543, activeUsers: 22448 },
          { month: "Mar", totalUsers: 96829, activeUsers: 34058 },
          { month: "Apr", totalUsers: 99430, activeUsers: 35948 },
          { month: "May", totalUsers: 102940, activeUsers: 40578 },
          { month: "Jun", totalUsers: 124793, activeUsers: 48830 },
          { month: "Jul", totalUsers: 134503, activeUsers: 49304 },
          { month: "Aug", totalUsers: 145558, activeUsers: 53039 },
          { month: "Sep", totalUsers: 155839, activeUsers: 65048 },
          { month: "Oct", totalUsers: 165435, activeUsers: 67439 },
          { month: "Nov", totalUsers: 169934, activeUsers: 78594 },
          { month: "Dec", totalUsers: 180346, activeUsers: 86306 },
        ],
        revenueDistribution: [
          { name: "Subscriptions", value: 865645 },
          { name: "Ads", value: 478563 },
        ],
        topSongs: [
          { name: "Hanuman Chalisa", streams: 549205 },
          { name: "Naa E Sanjege", streams: 489582 },
          { name: "Ello Maleyagide", streams: 435025 },
          { name: "Kun Faya", streams: 356902 },
          { name: "Naguva Nayana", streams: 329042 },
        ],
        streams: [
          {
            songName: "Nange Allava",
            artist: "Sanjith Hegde",
            dateStreamed: formattedToday,
            streamCount: 1242,
            userId: "user_001",
          },
          {
            songName: "Preetiya Hesare Neenu",
            artist: "Raghu Dixit",
            dateStreamed: formattedToday,
            streamCount: 980,
            userId: "user_002",
          },
          {
            songName: "Komala Henne",
            artist: "Charan Raj",
            dateStreamed: formattedToday,
            streamCount: 1139,
            userId: "user_003",
          },
          {
            songName: "Ninneya Nalumeya",
            artist: "Shreya Ghoshal",
            dateStreamed: formattedYesterday,
            streamCount: 1395,
            userId: "user_004",
          },
          {
            songName: "Anuraga Aralo",
            artist: "Karthik",
            dateStreamed: formattedYesterday,
            streamCount: 1593,
            userId: "user_005",
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/metrics", (schema) => {
        return schema.db.metrics[0];
      });

      this.get("/userGrowth", (schema) => {
        return schema.db.userGrowth;
      });

      this.get("/revenueDistribution", (schema) => {
        return schema.db.revenueDistribution;
      });

      this.get("/topSongs", (schema) => {
        return schema.db.topSongs;
      });

      this.get("/streams", (schema) => {
        return schema.db.streams;
      });
    },
  });
}

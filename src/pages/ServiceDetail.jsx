import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";
import Hero from "../componets/Hero";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

export default function ServiceDetail() {
  const { id } = useParams();
  const svc = services.find((s) => s.id === id);
  const nav = useNavigate();

  if (!svc) {
    return (
      <Box
        minHeight="70vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="md"
        mx="auto"
        px={2}
        py={6}
        textAlign="center"
      >
        <Typography variant="h4" color="error" gutterBottom>
          Service Not Found
        </Typography>
        <Button
          variant="outlined"
          onClick={() => nav("/services")}
          sx={{
            mt: 2,
            borderColor: "#007ACC",
            color: "#007ACC",
            "&:hover": {
              backgroundColor: "#007ACC",
              color: "white",
            },
          }}
        >
          Back to Services
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Hero
        title={svc.title}
        subtitle={svc.short}
        ctaText="Book Now"
        onCta={() => {}}
        bgColor={svc.colors?.light || "#E0F5FF"}
        titleColor={svc.colors?.primary || "#007ACC"}
      />

      <Box maxWidth="md" mx="auto" px={2} py={6}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            borderLeft: `8px solid ${svc.colors?.primary || "#007ACC"}`,
          }}
        >
          {/* Title */}
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={3}
            sx={{ color: svc.colors?.primary || "#007ACC" }}
          >
            {svc.title}
          </Typography>

          {/* Details */}
          <Typography
            variant="body1"
            color="text.secondary"
            mb={6}
            sx={{ lineHeight: 1.6 }}
          >
            {svc.details}
          </Typography>

          {/* 3 Cards */}
          <Grid container spacing={4}>
            {[
              { title: "What to Expect", text: "Personalized, caring service that meets all your dog’s needs." },
              { title: "Pricing & Packages", text: "Transparent pricing options tailored for your convenience." },
              { title: "FAQ", text: "Answers to common questions so you can book with confidence." },
            ].map((card, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: svc.colors?.light || "#E0F5FF",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    mb={1}
                    sx={{ color: svc.colors?.dark || "#005A99" }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesDetail from "../data/servicesDetail";
import Hero from "../componets/Hero"; // Make sure folder name is correct
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Stars,
  AttachMoney,
  ErrorOutline,
} from "@mui/icons-material";

export default function ServiceDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const theme = useTheme();

  const svc = servicesDetail.find((s) => s.id === id);

  const mainColor = svc?.colors?.primary || theme.palette.primary.main;
  const lightBg = alpha(mainColor, 0.08);
  const heavyBg = alpha(mainColor, 0.15);

  if (!svc) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        p={3}
        textAlign="center"
      >
        <ErrorOutline sx={{ fontSize: 80, color: "text.disabled", mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Service Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          The service you are looking for doesn't exist or has been removed.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => nav("/services")}
          sx={{ borderRadius: 20, textTransform: "none" }}
        >
          Return to Services
        </Button>
      </Box>
    );
  }

  const hasPricing = svc.pricing && svc.pricing.length > 0;
  const hasFeatures = svc.features && svc.features.length > 0;

  return (
    <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh", pb: 8 }}>
      {/* Hero Section */}
      <Hero
        title={svc.title}
        subtitle={svc.short}
        // Removed ctaText and onCta props to remove button
        bgColor={svc.colors?.light || "#EEF2FF"}
        titleColor={mainColor}
      />

      <Container maxWidth="lg" sx={{ mt: -6, position: "relative", zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            boxShadow: "0px 10px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <Box mb={4}>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => nav("/services")}
              sx={{
                mb: 2,
                color: "text.secondary",
                textTransform: "none",
                "&:hover": { bgcolor: "transparent", color: mainColor },
              }}
            >
              Back
            </Button>

            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <Typography
                variant="h3"
                component="h1"
                fontWeight="800"
                sx={{
                  color: "#111827",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                {svc.title}
              </Typography>
              {hasPricing && (
                <Chip
                  label="Packages Available"
                  icon={<Stars sx={{ fontSize: "16px !important" }} />}
                  sx={{
                    bgcolor: lightBg,
                    color: mainColor,
                    fontWeight: "bold",
                    border: `1px solid ${alpha(mainColor, 0.2)}`,
                  }}
                />
              )}
            </Box>
          </Box>

          <Grid container spacing={6}>
            {/* LEFT COLUMN */}
            <Grid item xs={12} md={hasPricing ? 7 : 12}>
              <Typography
                variant="h6"
                fontWeight="700"
                gutterBottom
                sx={{ color: "#374151" }}
              >
                About this Service
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  mb: 4,
                }}
              >
                {svc.description || svc.details || "No description available."}
              </Typography>

              {hasFeatures && (
                <Box mb={4}>
                  <Typography variant="h6" fontWeight="700" gutterBottom>
                    What We Offers
                  </Typography>
                  <List disablePadding>
                    {svc.features.map((feature, index) => (
                      <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle sx={{ color: mainColor, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              <Box
                sx={{
                  p: 3,
                  bgcolor: lightBg,
                  borderRadius: 3,
                  borderLeft: `6px solid ${mainColor}`,
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ color: mainColor }}
                >
                  Important Note
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  Prices may vary depending on breed, size, temperament, and
                  specific care requirements. We prioritize safety and hygiene
                  in every session.
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT COLUMN: Pricing */}
            {hasPricing && (
              <Grid item xs={12} md={5}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    position: { md: "sticky" },
                    top: 20,
                    borderColor: alpha(mainColor, 0.3),
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <AttachMoney sx={{ color: mainColor, mr: 1 }} />
                    <Typography variant="h5" fontWeight="700">
                      Pricing Plans
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Box display="flex" flexDirection="column" gap={3}>
                    {svc.pricing.map((plan, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: plan.recommended
                            ? mainColor
                            : "divider",
                          bgcolor: plan.recommended
                            ? alpha(mainColor, 0.04)
                            : "transparent",
                          transition: "0.3s",
                          "&:hover": {
                            borderColor: mainColor,
                            boxShadow: `0 4px 16px ${alpha(mainColor, 0.15)}`,
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {plan.title}
                            </Typography>
                            {plan.frequency && (
                              <Typography
                                variant="caption"
                                display="block"
                                color="text.secondary"
                              >
                                {plan.frequency}
                              </Typography>
                            )}
                          </Box>
                          <Typography
                            variant="h6"
                            fontWeight="800"
                            color={mainColor}
                          >
                            {plan.price}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Removed Book Appointment button */}

                  <Typography
                    variant="caption"
                    display="block"
                    align="center"
                    color="text.disabled"
                    mt={3}
                  >
                  </Typography>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
